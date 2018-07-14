<template>
    <div class="shoot">
        <div class="video_module">
            <video id="video" class="video" :src="video_src" autoplay loop></video>
            <canvas id="canvas" style="display: none"></canvas>
        </div>
        <div class="footer">
            <div class="shoot-controller">
                <button @click="take_video"></button>
            </div>
            <div class="btn-group">
                <div class="btn uploadFile">
                    <label class="upload">
                        <input type="file" id="upload" value="">
                    </label>
                    <label class="take_pic"></label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
      return {
          video_src:""
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
    .video_module{
        height: 77%;
    }
    .shoot {
        flex-grow: 1;
        position: relative;
        background-color: black;
    }

    .video {
        width: 100%;
        height: 100%;
        background-color: black;
    }

    .footer {
        width: 100%;
        height: 23%;
        position: absolute;
        bottom: 0px;
        background: url("/src/asset/img/takephoto_bg.png");
        background-size: cover;
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
        width: 180px;
        height: 180px;
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
