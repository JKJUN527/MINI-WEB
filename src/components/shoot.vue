<template>
    <div class="shoot">
        <div class="chat-header">
            <text class="left"></text>
            <text class="name">录制页</text>
            <text class="right" @click="handleClick">确定</text>
        </div>
        <div class="video_module">
            <video id="video" class="video" width="750" height="750" :src="videoDataUrl" autoplay="autoplay" preload loop muted></video>
            <canvas id="canvas" width="375" height="620"></canvas>
        </div>
        <div class="footer">
            <div class="shoot-controller">
                <button @click="take_video"></button>
            </div>
        </div>
    </div>
</template>
<script>
import ajax from '../ajax/index.js'
export default {
    data () {
      return {
        videoDataUrl: '',
        file: {},
        mediaRecorder: {},
        chunks: [],
        position: [],
        blob: {},
        isShooting: false
      }
    },
    mounted () {
        var img = new Image()
        img.src = '../asset/img/77ea2be15f2b479b2980799a61ee21ec.png'
        var video = document.getElementById('video');
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var tracker = new tracking.ObjectTracker('face');
        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);
        tracking.track('#video', tracker, { camera: true });
        tracker.on('track', function(event) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            event.data.forEach(function(rect) {
                context.drawImage(img, rect.x, rect.y - rect.height, rect.width, rect.height);
            });
        });
        navigator.getUserMedia({
            audio: true,
            video: true
        }, (stream) => {
            this.mediaRecorder = new MediaRecorder()
            this.mediaRecorder.ondataavailable = (e) => {
                this.chunks.push(e.data)
            }
            this.mediaRecorder.onstop = (e) => {
                blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' })
                var formdata = new FormData()
                formdata.append('file', blob)
            }
        })
    },
    methods: {
        handleClick () {
            var form = new FormData()
            form.append('file', this.file)
            ajax.doUploadVideo(form)
            .then(() => {
                this.$router.push({
                    name: 'publish',
                    params: {
                        url: ''
                    }
                })
            })
        },
        take_video () {
            this.isShooting === false ? this.mediaRecorder.start() : this.mediaRecorder.stop()
            this.isShooting = !this.isShooting
        }
    }
}
</script>
<style scoped>
    .chat-header{
        width: 100%;
        height: 7%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        background-color: #161824;
        /*justify-content: center;*/

    }
    .chat-header p{
        /*position: absolute;*/
        color:white;
    }
    .chat-header .left{
        background: url("/src/asset/img/backicon.png");
        background-size: cover;
        width: 0.3rem;
        height: 0.55rem;
        left: 0.4rem;
    }
    .chat-header .right{
        background: url(/src/asset/img/saveicon.png);
        background-size: cover;
        width: 1.4rem;
        height: 0.8rem;
        right: 0.4rem;
        padding: 0.1rem 0 0.1rem 0.25rem;
    }
    .chat-header .name{
        font-size: 0.55rem;
        left: 5%;
    }
    .video_module{
        position: relative;
        height: 93%;
    }

    #video {
        position: absolute;
        left: 0;
        top: 0
    }

    #canvas {
        position: absolute;
        left: 0;
        top: 0
    }

    .shoot {
        flex-grow: 1;
        position: relative;
        background-color: black;
        height: 100%;
    }

    .video {
        width: 100%;
        height: 100%;
        background-color: black;
        object-fit: fill;
    }

    .footer {
        width: 100%;
        /*height: 23%;*/
        position: absolute;
        bottom: 1rem;
        /*background: url("/src/asset/img/takephoto_bg.png");*/
        /*background-size: cover;*/
    }

    .shoot-controller {
        margin: 0 auto;
        /*width: 200px;*/
        /*height: 200px;*/
        /*border-radius: 50%;*/
        /*background-color: black*/
    }
    .shoot-controller button{
        background: url("/src/asset/img/takephoto.png");
        background-size: cover;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-top: 0.2rem;
    }
    .uploadFile {
        position: relative;
    }
    .uploadFile .upload {
        position: absolute;
        /*width: 100px;*/
        background: url("/src/asset/img/openpicicon.png");
        background-size: cover;
        height: 0.8rem;
        width: 0.8rem;
        border-radius: 50%;
        left: 2.6rem;
        top: 0.1rem;
    }
    .uploadFile input{
        opacity: 0;
        height: 0.8rem;
        width: 0.8rem;
    }
    .uploadFile .take_pic{
        position: absolute;
        background: url("/src/asset/img/cameraicon.png");
        background-size: cover;
        height: 0.7rem;
        width: 0.8rem;
        /*border-radius: 50%;*/
        left: 6.5rem;
        top: 0.1rem;
    }

    .btn-group {
        flex-direction: row;
        /*justify-content: center;*/
    }

    .btn {
        /*margin: 30px 100px;*/
        /*width: 40px;*/
        /*height: 40px;*/
        /*background-color: black;*/
    }
</style>
