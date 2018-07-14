<template>
    <div>
        <div v-for="(src, index) in srcs" :key="index">
            <div class="video-wrapper" @click="handleClick" @touchstart="handleTouchStart" @touchmove='handleTouchMove' @touchend="handleTouchEnd" :style="{opacity: opacity, transform: `rotate(${rotate}deg) translate(${distanceX}px, ${distanceY}px)`}">
                <video id="video1" :src="src" :auto-play="index == 0 ? true : false" play-status="play" style="width: 100%"></video>
            </div>
        </div>
        <wxc-popup popup-color="gray"
            :show="isBottomShow"
            @wxcPopupOverlayClicked="popupOverlayBottomClick"
            pos="bottom"
            height="300">
            <div>
                <div>
                    <image />
                    <div class="user-name"></div>
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
            srcs: [],
            isBottomShow: false
        }
    },
    mounted () {
        ajax.getVideo({ count: 2 })
        .then(({ data }) => {
            this.srcs.push(data.data[0].replace('http', 'https'))
            this.srcs.push(data.data[1].replace('http', 'https'))
        })
    },
    methods: {
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
                this.video_2 = data.data[0].replace('http', 'https')
            })
            if(Math.abs(this.distanceX) > Math.abs(this.distanceY)) {
                if(this.distanceX > 0) {
                    console.log('右划like')
                } else {
                    console.log('左划no')
                }
            } else {
                if(this.distanceY > 0) {
                    console.log('下滑摄像')
                } else {
                    console.log('上划superlike')
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
</style>

