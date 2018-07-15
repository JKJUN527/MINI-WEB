<template>
    <div class="index-page">
        <div class="chat-header">
            <text class="left" @click="handleRouter('ownInfo')"></text>
            <text class="name"></text>
            <text class="right" @click="handleRouter('msgtest')"></text>
            <text class="header-bottom"></text>
        </div>
        <video id="video2" preload='true' :src="video_2" style="width: 100%; position: absolute"></video>
        <div class="video-wrapper" @click="handleClick" @touchstart="handleTouchStart" @touchmove='handleTouchMove' @touchend="handleTouchEnd" :style="{opacity: opacity, transform: `rotate(${rotate}deg) translate(${distanceX}px, ${distanceY}px)`}">
            <video id="video1" :src="video_1" auto-play="true" play-status="play" style="width: 100%"></video>
        </div>
        <div class="footer">
            <div class="photo-img">
                <image class="person-img" :src="imgurl" @click="handleRouter('otherInfo',{ user: id })"/>
                <text class="person-name">{{ name }}</text>
            </div>
            <div class="content">
                <textarea row="3" :placeholder="idea" disabled></textarea>
            </div>
        </div>
        <wxc-popup popup-color="#161824"
            :show="isBottomShow"
            @wxcPopupOverlayClicked="popupOverlayBottomClick"
            pos="bottom"
            height="400"
            class="super-block">
            <div>
                <div class="super-header">
                    <text class="super-img-bg">
                        <image class="super-image" :src="imgurl"/>
                    </text>
                    <text class="super-name color-white">{{ name }}</text>
                </div>
                <textarea class="super-msg" name="" id="" cols="30" rows="5" placeholder="写点什么吧..." v-model="supermsg"></textarea>
                <div class="superlike-button">
                    <button class="close-button" @click="closeSuperLike">取消</button>
                    <button class="send-button" @click="sendSuperLike">发送</button>
                </div>
            </div>
        </wxc-popup>
    </div>
</template>
<script>
import ajax from '../ajax/index.js'
import { WxcPopup } from 'weex-ui'
export default {
<<<<<<< HEAD
    components: { WxcPopup },
    data () {
        return {
            video_1: '',
            video_2: 'https://mini.jkjun.cn/media/videos/8.mp4',
            startX: 0,
            startY: 0,
            X: 0,
            Y: 0,
            distanceX: 0,
            distanceY: 0,
            R: 1000,
            rotate: 0,
            opacity: 1,
            isBottomShow: false,
            id: '',
            name: '',
            imgurl: '',
            supermsg: '',
            superLikeTime: 1
        }
    },
    mounted () {
        ajax.getCount()
        .then(({ data }) => {
            this.superLikeTime = data.data.superCount
        })
        ajax.getVideo({ count: 2 })
        .then(({ data }) => {
            this.video_1 = data.data[0].videourl
            this.video_2 = data.data[1].videourl
            this.id = data.data[0].userid
            this.name = data.data[0].username
            this.imgurl = data.data[0].userphoto
            this.idea = data.data[0].idea
        })
    },
    methods: {
        handleRouter (route, params) {
            this.$router.push({
                name: route,
                params
            })
        },
        popupOverlayBottomClick () {
            this.isBottomShow = false
        },
        handleTouchStart (e) {
            this.startX = e.changedTouches[0].pageX
            this.X = e.changedTouches[0].pageX
            this.startY = e.changedTouches[0].pageY
            this.Y = e.changedTouches[0].pageY
        },
        handleTouchMove (e) {
            this.X = e.changedTouches[0].pageX
            this.Y = e.changedTouches[0].pageY
        },
        handleTouchEnd (e) {
            if(this.distanceX * this.distanceX + this.distanceY * this.distanceY < 100 * 100) {
                this.distanceX = 0
                this.distanceY = 0
                this.rotate = 0
                return
            }
            if(Math.abs(this.distanceX) > Math.abs(this.distanceY)) {
                ajax.getVideo({ count: 1 })
                .then(({ data }) => {
                    this.video_1 = this.video_2
                    this.video_2 = data.data[0].videourl
                    this.id = data.data[0].userid
                    this.name = data.data[0].username
                    this.imgurl = data.data[0].userphoto
                    this.idea = data.data[0].idea
                })
                if(this.distanceX > 0) {
                    ajax.sendPreference({
                        video_url: this.video_1,
                        user: this.id,
                        type: 'like'
                    }).then((res) => {
                        if(res.data.event == 1) {
                            this.$router.push({ name: 'match' })
                        }
                    })
                } else {
                    ajax.sendPreference({
                        video_url: this.video_1,
                        user: this.id,
                        type: 'no'
                    })
                }
            } else {
                if(this.distanceY > 0) {
                    console.log('下滑摄像')
                } else {
                    this.isBottomShow = true
                }
            }
            this.opacity = 0
            setTimeout(() => {
                this.distanceX = 0
                this.distanceY = 0
                this.rotate = 0
                this.opacity = 1
            }, 200)
        },
        closeSuperLike () {
            this.isBottomShow = false
        },
        sendSuperLike () {
            ajax.sendPreference({
                video_url: this.video_1,
                user: this.id,
                type: 'super',
                msg: this.supermsg
            }).then((res) => {
                this.isBottomShow = false
                if(res.data.event == 1) {
                    this.$router.push({ name: 'match' })
                }
            })
        },
  },
  watch: {
    X: function (val) {
      this.rotate = Math.asin((val - this.startX) / this.R) / 2 / Math.PI * 360
      this.distanceX = val - this.startX
    },
    Y: function (val) {
      this.distanceY = val - this.startY
    }
  }
}
</script>
<style scoped>
    .index-page {
        height: 100%;
    }
    .chat-header{
        width: 100%;
        height: 7%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        /*background-color: #161824;*/
        /*justify-content: center;*/
        position: absolute;
        z-index: 100;
        top: 0.2rem;
    }
    .chat-header p{
        /*position: absolute;*/
        color:white;
    }
    .chat-header .left{
        background: url("/src/asset/img/selficon.png");
        background-size: cover;
        width: 0.9rem;
        height: 0.9rem;
        left: 0.4rem;
    }
    .chat-header .right{
        background: url("/src/asset/img/msgblog.png");
        background-size: cover;
        width: 0.9rem;
        height: 0.8rem;
        /*right: 0.4rem;*/
        right: -2.7rem;
        /*padding: 0.1rem 0 0.1rem 0.25rem;*/
    }
    .chat-header .name{
        background: url("/src/asset/img/logo.png");
        background-size: cover;
        width: 0.6rem;
        height: 1rem;
        left: 1.5rem;
    }
    .chat-header .header-bottom{
        background: url("/src/asset/img/cameraicon.png");
        background-size: cover;
        width: 0.9rem;
        height: 0.8rem;
        right: 0.4rem;
        top: 2rem;
        /*padding: 0.1rem 0 0.1rem 0.25rem;*/
    }
    .close-button{
        width: 1rem;
        top: 0.1rem;
        left: 0.2rem;
        position: absolute;
        opacity: 0;
        height: 100%;
    }
    .send-button{
        right: 0.2rem;
        width: 1rem;
        top: 0.1rem;
        position: absolute;
        opacity: 0;
        height: 100%;
    }
    .video-wrapper {
        flex-grow: 1;
        background-color: transparent;
        position: relative;
        transition: opacity 0.5s;
        -moz-transition: opacity 0.5s; /* Firefox 4 */
        -webkit-transition: opacity 0.5s; /* Safari 和 Chrome */
        -o-transition: opacity 0.5s; /* Opera */
    }

    .super-header {
        padding-left: 2.5rem;
        padding-top: 0.2rem;
        position: relative;
        height: 100px;
        align-items: flex-start
    }

    .super-img-bg{
        position: absolute;
        top: -65px;
        left: 30px;
        background: url("/src/asset/img/flare.png");
        background-size: cover;
        width: 130px;
        height: 130px;
    }

    .super-image {
        /*position: absolute;*/
        /*top: -50px;*/
        /*left: 50px;*/
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: white;
        margin-top:13px;
        margin-left:15px;
    }

    .super-msg {
        margin: 0 auto;
        /*width: 9rem;*/
        /*height: 2.5rem;*/
        background: transparent;
        border-style: none;
        color: white;
    }

    .super-send {
        text-align: center
    }
    .superlike-button {
        border-top: 1px #C5C5C5 solid;
        background: url("/src/asset/img/superlike-button.png");
        background-size: cover;
        width: 100%;
        height: 1.3rem;
    }
    .footer {
        width: 86%;
        left: 7%;
        /*height: 23%;*/
        position: absolute;
        bottom: 1rem;
        /*background: url("/src/asset/img/takephoto_bg.png");*/
        /*background-size: cover;*/
    }
    .footer p{
        position: absolute;
        left: 20%;
        top: 0.5rem;
        color: white;
        font-size: 0.5rem;
    }
    .photo-img figure{
        /*background: url("/src/asset/img/takephoto.png");*/
        /*background-size: cover;*/
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        /*margin-top: 0.2rem;*/
    }
    .footer textarea {
        color: white;
        margin-top: 0.2rem;
        min-height: 2rem;
        background: transparent;
    }
</style>
