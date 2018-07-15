<template>
    <div id="personalInfo">
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
              <button class="edit-btn middle-font-size" @click="doEdit">
                <router-link class="color-white" :to="{name: 'personalEdit'}">
                    编辑资料
                </router-link>
              </button>
        </div>
        <div class="video-block">
            <div class="tab-group base-flex">
                <text class="base-font-size color-white tab" @click="changeTap">作品</text>
                <text class="base-font-size color-white tab">|</text>
                <text class="base-font-size color-white tab" @click="changeTap">Like</text>
            </div>
            <div v-if="showVideoList === 0" class="color-white video-list">
                <!--<div>-->
                    <!--<wxc-ep-slider :slider-id="sliderId"-->
                                   <!--:card-length='cardLength'-->
                                   <!--:card-s="cardSize"-->
                                   <!--:select-index="2"-->
                                   <!--@wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">-->
                        <!--&lt;!&ndash;自动生成demo&ndash;&gt;-->
                        <!--<div v-for="(v,index) in [1,2,3,4,5]"-->
                             <!--:key="index"-->
                             <!--:slot="`card${index}_${sliderId}`"-->
                             <!--:class="['slider',`slider${index}`]">-->
                            <!--<text>这里是第{{index + 1}}个滑块</text>-->
                        <!--</div>-->
                    <!--</wxc-ep-slider>-->
                <!--</div>-->
            </div>
            <div v-if="showVideoList === 1" class="color-white video-list">
                <!--<div>-->
                    <!--<wxc-ep-slider :slider-id="sliderId"-->
                                   <!--:card-length='cardLength'-->
                                   <!--:card-s="cardSize"-->
                                   <!--:select-index="2"-->
                                   <!--@wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">-->
                        <!--&lt;!&ndash;自动生成demo&ndash;&gt;-->
                        <!--<div v-for="(v,index) in [1,2,3,4,5]"-->
                             <!--:key="index"-->
                             <!--:slot="`card${index}_${sliderId}`"-->
                             <!--:class="['slider',`slider${index}`]">-->
                            <!--<text>这里是第{{index + 1}}个滑块</text>-->
                        <!--</div>-->
                    <!--</wxc-ep-slider>-->
                <!--</div>-->
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
      labels: ['北京', '20岁', '双子座', '男'],
      signature: '',
      imgurl: '',
      showVideoList: 0,
      sliderId: 1,
      cardLength: 5,
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
      this.labels = [data.local, data.age + '岁', data.constellation, data.sex]
      this.name = data.name
      this.signature = data.signature
      alert(JSON.stringify(data))
      this.imgurl = data.img_portrait
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
          alert(this.showVideoList)
        if (this.showVideoList === 0){
            this.showVideoList = 1
        }else{
            this.showVideoList = 0
        }
      }
  },
  watch: {
    showVideoList: function () {}
  }
}
</script>
<style scoped>
    #personalInfo {
        position: relative;
        background: #1c1f1f;
        flex: 1
    }

    .user-header {
        margin-top: 1.5rem;
    }

    .user-img {
        margin: 0 20px;
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        background: white
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
        margin-top: 100px;
    }

    .edit-block {
        margin: 20px 0;
        align-items: flex-end
    }

    .edit-btn {
        margin-top: 30px;
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
        background-color: #C3413D;
        align-items: center;
        justify-content: center;
    }

    .slider1 {
        background-color: #635147;
    }

    .slider2 {
        background-color: #FFC302;
    }

    .slider3 {
        background-color: #FF9090;
    }

    .slider4 {
        background-color: #546E7A;
    }

</style>
