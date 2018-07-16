<template>
    <div id="personalInfo">
        <div class="chat-header" @click="goback">
            <text class="left"></text>
        </div>
        <!-- <div class="edit">编辑</div> -->
        <div class="user-header base-flex">
            <div class="user-img">
                <image :src="imgurl" />
            </div>
            <div class="user-base-info">
                <text class="user-name base-font-size">{{ name }}</text>
                <div class="user-label">
                    <text v-for="(label, key) in labels" :key="key" class="label-item middle-font-size" >{{ label }}</text>
                </div>
            </div>
        </div>
        <div class="user-signature">
            <text class="color-white">个性签名</text>
            <text class="color-white" style="{text-align: center}">{{ signature }}</text>
        </div>
        <div class="edit-block">
              <button class="edit-btn middle-font-size">
                <router-link class="color-white" :to="{name: 'personalEdit'}">
                    编辑资料
                </router-link>
              </button>
        </div>
        <div class="video-block">
            <div class="tab-group base-flex">
                <text class="base-font-size color-white tab" :style="{opacity: myVideo}" @click="changeTap">作品</text>
                <text class="base-font-size color-white tab">|</text>
                <text class="base-font-size color-white tab" :style="{opacity: likeVideo}" @click="changeTap">Like</text>
            </div>
            <div v-if="showVideoList === 0" class="color-white video-list">
                <div>
                    <wxc-ep-slider :slider-id="sliderId"
                                   :card-length='cardLength'
                                   :card-s="cardSize"
                                   :select-index="my_video_list / 2"
                                   @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
                        <div v-for="(v,index) in my_video_list"
                             :key="index"
                             :slot="`card${index}_${sliderId}`"
                             :class="['slider',`slider${index}`]">
                            <video :src="v" controls="controls"></video>
                        </div>
                    </wxc-ep-slider>
                </div>
            </div>
            <div v-if="showVideoList === 1" class="color-white video-list">
                <div>
                    <wxc-ep-slider :slider-id="sliderId"
                                   :card-length='cardLength'
                                   :card-s="cardSize"
                                   :select-index="like_video_list / 2"
                                   @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
                        <div v-for="(v,index) in like_video_list"
                             :key="index"
                             :slot="`card${index}_${sliderId}`"
                             :class="['slider',`slider${index}`]">
                            <video :src="v" controls="controls" ></video>
                        </div>
                    </wxc-ep-slider>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { WxcEpSlider } from 'weex-ui'
import ajax from '../ajax/index.js'
export default {
  components: { WxcEpSlider },
  data () {
    return {
      name: '',
      labels: [],
      signature: '',
      imgurl: '',
      showVideoList: 0,
      myVideo: 1,
      likeVideo: 0.6,
      sliderId: 1,
      cardLength: 5,
      like_video_list: [],
      my_video_list: [],
      cardSize: {
        width: 400,
        height: 300,
        spacing: 0,
        scale: 0.8
      }
    }
  },
  mounted () {
  ajax.getPersonInfo({})
    .then(({ data }) => {
      data = data.data
      this.labels = [data.local, data.age + '岁', data.constellation || '天蝎座', data.sex]
      this.name = data.name
      this.signature = data.signature
      this.imgurl = data.img_portrait
      this.like_video_list = data.like_video_list
      this.my_video_list = data.my_video_list
    })
  },
  methods: {
    doListChange (msg) {
        this.showVideoList = msg
    },
    wxcEpSliderCurrentIndexSelected (e) {
        const index = e.currentIndex
    },
    changeTap () {
        if (this.showVideoList === 0){
            this.showVideoList = 1
            this.myVideo = 0.6
            this.likeVideo = 1
        }else{
            this.showVideoList = 0
            this.myVideo = 1
            this.likeVideo = 0.6
        }
    },
    goback () {
        this.$router.go(-1)
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
    #personalInfo {
        position: relative;
        background: #1c1f1f;
        flex: 1
    }

    .user-header {
        margin-top: 0.3rem;
    }

    .user-img {
        margin: 0 20px;
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        overflow: hidden;
        background: white
    }

    .user-img figure {
        height: 100%;
    }

    .user-name {
        color: white;
        margin-top: 25px;
    }
    .user-label {
        margin: 20px 0;
        flex-direction: row;
    }

    .label-item {
        margin: 0 10px;
        padding: 0 20px;
        text-align: center;
        color: white;
        border-radius: 10px;
        background: #807773;
    }

    .user-signature  {
        padding: 0 40px;
        margin-top: 0.3rem;
    }

    .edit-block {
        /*margin: 20px 0;*/
        margin-bottom: 0.2rem;
        align-items: flex-end
    }

    .edit-btn {
        /*margin-top: 30px;*/
        margin-right: 20px;
        padding: 0 10px;
        border-radius: 10px;
        background: #143640;
    }

    .video-block {
        flex-grow: 1
    }

    .tab-group {
        padding: 15px 0;
        justify-content: center;
        background: #010813
    }

    .tab {
        margin: 0 60px;
    }

    .video-list {
        flex-grow: 1;
        background: url('../asset/img/user-info-bg.png');
        background-size: cover
    }

    .bg {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0
    }

    .wrapper {
        padding-top: 100px;
    }

    .slider {
        width: 5rem;
        height: 7rem;
        margin-top: 0.5rem;
        align-items: center;
        justify-content: center;
    }

    .slider video {
        width:100%;
        height: 90%;
    }


</style>
