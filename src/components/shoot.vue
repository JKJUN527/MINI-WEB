<template>
    <div class="shoot">
        <div class="chat-header">
            <text class="left"></text>
            <text class="name">录制页</text>
            <text class="right">确定</text>
        </div>
        <div class="video_module">
            <video id="video" class="video" :src="video_src"  controls="controls" autoplay="autoplay"></video>
            <canvas id="canvas" style="display: none"></canvas>
        </div>
        <div class="footer">
            <div class="shoot-controller">
                <button @click="take_video"></button>
            </div>
            <!--<div class="btn-group">-->
                <!--<div class="btn uploadFile">-->
                    <!--<label class="upload">-->
                        <!--<input type="file" id="upload" value="">-->
                    <!--</label>-->
                    <!--<label class="take_pic"></label>-->
                <!--</div>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>
export default {
    data () {
      return {
          video_src:"https://mini.jkjun.cn/media/videos/8.mp4"
      }
    },
    methods: {
        handleClick () {
            
        },
        take_video () {
            alert("点击录像");
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
        /*height: 77%;*/
        height: 93%;
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
