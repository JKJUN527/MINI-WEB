<template>
    <div id="personalInfo">
        <!-- <div class="edit">编辑</div> -->
        <div class="user-header">
            <div class="user-img">
                <image src='' />
            </div>
            <text class="user-name">user name</text>
        </div>
        <div class="user-label">
            <text v-for="(label, key) in labels" :key="key" class="label-item" >{{ label }}</text>
        </div>
        <div class="video">
            <div class="tab-group">
                <text class="tab">作品</text>
                <text>|</text>
                <text class="tab">Like</text>
            </div>
            <!-- <wxc-ep-slider :slider-id="sliderId" v-if="showVideoList == 'works'"
                :card-length='cardLength'
                :card-s="cardSize"
                :select-index="2"
                @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
            </wxc-ep-slider> -->
            <!-- <wxc-ep-slider :slider-id="sliderId" v-if="showVideoList == 'like'"
                :card-length='cardLength'
                :card-s="cardSize"
                :select-index="2"
                @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
            </wxc-ep-slider> -->
        </div>
    </div>
</template>
<script>
import { WxcEpSlider } from 'weex-ui'
export default {
  components: { WxcEpSlider },
  data () {
    return {
      labels: ['北京', '20岁', '双子座', '男'],
      showVideoList: 'works',
    }
  }
}
</script>
<style scoped>
    #personalInfo {
        padding: 0 20px;
        position: relative;
        background: #1c1f1f
    }

    .edit {
        width: 2rem;
        padding: 10px 0;
        position: absolute;
        right: 1rem;
        background: red;
        text-align: center;
        font-size: 0.5rem;
    }
    .user-header {
        margin-top: 2rem;
        align-items: center;
    }
    .user-img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background: white
    }
    .user-name {
        font-size: 48px;
        color: white;
    }
    .user-label {
        margin: 0.5rem 0;
        flex-direction: row;
        justify-content: space-between
    }

    .label-item {
        min-width: 2rem;
        text-align: center;
        color: white;
        border-radius: 20px;
        background: #807773;
    }

    .slider {
        margin-top: 25px;
        margin-left: 25px;
        width: 650px;
        height: 700px;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
    }
    .frame {
        width: 100%;
        height: 700px;
        position: relative;
    }
</style>
