<template>
    <div>
        <video id="video2" preload='true' :src="video_2" style="width: 100%; position: absolute"></video>
        <div class="video-wrapper" @click="handleClick" @touchstart="handleTouchStart" @touchmove='handleTouchMove' @touchend="handleTouchEnd" :style="{opacity: opacity, transform: `rotate(${rotate}deg) translate(${distanceX}px, ${distanceY}px)`}">
            <video id="video1" :src="video_1" auto-play="true" play-status="play" style="width: 100%"></video>
        </div>
        <wxc-popup popup-color="#000"
            :show="isBottomShow"
            @wxcPopupOverlayClicked="popupOverlayBottomClick"
            pos="bottom"
            height="400"
            class="super-block">
            <div>
                <div class="super-header">
                    <image class="super-image"/>
                    <text class="super-name color-white">肖宇干啥</text>
                </div>
                <textarea class="super-msg" name="" id="" cols="30" rows="10"></textarea>
                <div>
                    <div class="super-send color-white middle-font-size">发送</div>
                </div>
            </div>
        </wxc-popup>
    </div>
</template>
<script>
import ajax from '../ajax/index.js'
import { WxcPopup } from 'weex-ui'
export default {
    components: { WxcPopup },
    data () {
        return {
            video_1: '',
            video_2: '',
            startX: 0,
            startY: 0,
            X: 0,
            Y: 0,
            distanceX: 0,
            distanceY: 0,
            R: 1000,
            rotate: 0,
            opacity: 1,
            isBottomShow: false
        }
    },
    mounted () {
        ajax.getVideo({ count: 2 })
        .then(({ data }) => {
            this.video_1 = data.data[0]
            this.video_2 = data.data[1]
        })
    },
    methods: {
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
            if(this.distanceX * this.distanceX + this.distanceY * this.distanceY < 300 * 300) {
                this.distanceX = 0
                this.distanceY = 0
                this.rotate = 0
                return
            }
            ajax.getVideo({ count: 1 })
            .then(({ data }) => {
                this.video_1 = this.video_2
                this.video_2 = data.data[0]
            })
            if(Math.abs(this.distanceX) > Math.abs(this.distanceY)) {
                if(this.distanceX > 0) {
                    ajax.sendPreference({
                        type: 'like'
                    })
                } else {
                    ajax.sendPreference({
                        type: 'like'
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
        }
    },
    watch: {
        X: function(val) {
            this.rotate = Math.asin((val - this.startX) / this.R)/2/Math.PI*360
            this.distanceX = val - this.startX
        },
        Y: function(val) {
            this.distanceY = val - this.startY
        }
    }
}
</script>
<style scoped>
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

    .super-image {
        position: absolute;
        top: -50px;
        left: 50px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: white
    }

    .super-msg {
        margin: 0 auto;
        width: 9rem;
        height: 2.5rem;
    }

    .super-send {
        text-align: center
    }
</style>

