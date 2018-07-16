<template>
    <div id="personalInfo">
        <div class="chat-header" @click="goback">
            <text class="left"></text>
        </div>
        <!-- <div class="edit">编辑</div> -->
        <div class="user-header base">
            <div class="user-img">
                <image :src='imgurl' />
            </div>
            <text class="user-name base-font-size">{{ name }}</text>
        </div>
        <div class="user-signature">
            <text class="mini-font-size color-white" style="{text-align: center}">个性签名： {{ signature }}</text>
        </div>
        <div class="user-label">
            <text v-for="(label, key) in labels" :key="key" class="label-item middle-font-size" >{{ label }}</text>
        </div>
        <div class="video-block">
            <div class="tab-group base-flex">
                <text class="base-font-size color-white tab">作品</text>
            </div>
            <div v-if="showVideoList == 'works'" class="color-white video-list">
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
                            <video :src="v"></video>
                        </div>
                    </wxc-ep-slider>
                </div>
            </div>
            <div v-if="showVideoList == 'like'" class="color-white video-list">
                <!-- <img src="../asset/img/user-info-bg.png" alt="" class="bg" /> -->
                like
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
      labels: ['北京', '20岁', '双子座', '男'],
      showVideoList: 'works',
      sliderId: 1,
      cardLength: 5,
      name: '',
      signature: '',
      imgurl: '',
      my_video_list: [],
      cardSize: {
        width: 400,
        height: 300,
        spacing: 0,
        scale: 0.8
      },
      user_id: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.user_id = to.params.user
    })
  },
  mounted () {
    this.$nextTick(() => {
      ajax.getOtherInfo({ user_id: this.user_id })
        .then(({data}) => {
          data = data.data
          this.labels = [data.local, data.age + '岁', data.constellation, data.sex]
          this.name = data.name
          this.signature = data.signature
          this.imgurl = data.img_portrait
          this.my_video_list = data.my_video_list
        })
    })
  },
  methods: {
    doListChange (msg) {
      this.showVideoList = msg
    },
    goback () {
      this.$router.go(-1)
    }
  },
  watch: {
    showVideoList: function () {}
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
        /*margin-top: 0.5rem;*/
        align-items: center;
    }

    .user-img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: white;
        overflow: hidden;
    }

    .user-img figure {
        width: 100%;
        height: 100%;
    }
    .user-name {
        color: white;
        margin-top: 20px;
    }
    .user-label {
        margin: 0.1rem 0 0.4rem;
        flex-direction: row;
        justify-content: center
    }

    .label-item {
        margin: 0 10px;
        padding: 0 20px;
        text-align: center;
        color: white;
        border-radius: 10px;
        background: #807773;
    }

    .video-block {
        flex-grow: 1
    }

    .tab-group {
        padding: 20px 0;
        justify-content: center;
        background: #010813
    }

    .tab {
        margin: 0 40px;
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
        height: 6rem;
        margin-top: 0.2rem;
        align-items: center;
        justify-content: center;
    }

    .slider video {
        width:100%;
        height: 90%;
    }

</style>
