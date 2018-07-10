<template>
    <div id="personalInfo">
        <!-- <div class="edit">编辑</div> -->
        <div class="user-header base">
            <div class="user-img">
                <image src='' />
            </div>
            <text class="user-name base-font-size">User name</text>
        </div>
        <div class="user-signature">
            <text class="mini-font-size color-white" style="{text-align: center}">个性签名： XXXXXXXXXXXXXXXXXXXXXXXXX</text>
        </div>
        <div class="user-label">
            <text v-for="(label, key) in labels" :key="key" class="label-item middle-font-size" >{{ label }}</text>
        </div>
        <div class="video-block">
            <div class="tab-group base-flex">
                <text class="base-font-size color-white tab">作品</text>
            </div>
            <div v-if="showVideoList == 'works'" class="color-white video-list">
                <!-- <img src="../asset/img/user-info-bg.png" alt="" class="bg" /> -->
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
            <div v-if="showVideoList == 'like'" class="color-white video-list">
                <!-- <img src="../asset/img/user-info-bg.png" alt="" class="bg" /> -->
                like
            </div>
        </div>
    </div>
</template>
<script>
//import { WxcEpSlider } from 'weex-ui'
export default {
//  components: { WxcEpSlider },
  data () {
    return {
        labels: ['北京', '20岁', '双子座', '男'],
        showVideoList: 'works',
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
  methods: {
    doListChange (msg) {
      this.showVideoList = msg
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
        margin-top: 0.64rem;
        align-items: center;
    }

    .user-img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background: white
    }
    .user-name {
        color: white;
        margin-top: 20px;
    }
    .user-label {
        margin: 0.5rem 0 1rem;
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
        height: 8rem;
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
