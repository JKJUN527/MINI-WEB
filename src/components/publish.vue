
<template>
    <div id="publish">
        <div class="chat-header">
            <text class="left"></text>
            <text class="name">发布页</text>
            <text class="right" @click="handleClick">发布</text>
        </div>
        <textarea name="" placeholder="写点什么吧..." v-model="idea"></textarea>
        <div class="video-wrapper">
            <video :src="url || 'https://mini.jkjun.cn/media/videos/8.mp4'" controls="controls"></video>
        </div>
    </div>
</template>

<script>
import ajax from '../ajax/index.js'
export default {
    beforeRouteEnter (to, from, next) {
        next((vm) => {
            vm.url = to.params.url
        })
    },
    data () {
        return {
            idea: '写点什么吧...'
        }
    },
    methods: {
        handleClick () {
            ajax.doPublishVideo({ url: this.url, idea: this.idea })
            .then(({data}) => {
                this.$router.push({ name: 'index' })
            })
        }
    }
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
