
<template>
    <div id="publish">
        <div class="chat-header">
            <text class="left"></text>
            <text class="name">发布页</text>
            <text class="right">发布</text>
        </div>
        <textarea name="" placeholder="写点什么吧..."></textarea>
        <div class="video-wrapper">
            <video src="https://mini.jkjun.cn/media/videos/8.mp4" controls="controls"></video>
        </div>
    </div>    
</template>

<script>
export default {

}
</script>

<style>
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
        /*background: url("/src/asset/img/selficon.png");*/
        background-size: cover;
        width: 1rem;
        /*height: 0.7rem;*/
        right: 0.4rem;
    }
    .chat-header .name{
        font-size: 0.55rem;
        /*left:50%;*/
    }
    #publish {
        height: 100%;
        /*padding-top: 50px;*/
        background: black;
        flex-grow: 1;
        align-items: center
    }
    #publish video{
        width: 100%;
        /*height: 6rem;*/
        height: 100%;
    }

    #publish textarea {
        width: 600px;
        height: 25%;
        /*background-color: yellow*/
        color: white;
        background-color:transparent;
        padding-top: 0.6rem;
        font-size: 0.6rem;
    }

    .video-wrapper {
        /*margin-top: 60px;*/
        padding-top: 60px;
        padding-bottom: 60px;
        width: 600px;
        /*height: 500px;*/
        height: 68%;
        /*background-color: blue*/
    }
</style>
