<template>
    <div id="personalInfo">
        <div class="edit">编辑</div>
        <div class="user-header">
            <div class="user-img">
                <image src='' />
            </div>
            <div class="user-name">
                <text>XXX(昵称)</text>
            </div>
        </div>
        <div class="user-label">
            <text v-for="(label, key) in labels" :key="key" class="label-item" >{{ label }}</text>
        </div>
        <div class="user-signature">
            <text>个人签名</text>
            <text>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</text>
        </div>
        <div class="video-slider">
          <slider class="slider" interval="3000" auto-play="true">
            <div class="frame" v-for="(img, idx) in imageList" :key="idx">
              <image class="image" resize="cover" :src="img.src" />
              <text style="left:20px;top:20px;color:red;position:absolute">{{idx}}</text>
            </div>
          </slider>
        </div>
    </div>
</template>
<script>
export default {
  props: ['value'],
  data () {
    return {
      labels: ['北京', '20岁', '双子座', '男'],
      imageList: [
        {src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        {src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
        {src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
      ]
    }
  }
}
</script>
<style scoped>
    #personalInfo {
        padding: 0 20px;
        position: relative;
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
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .user-img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: red
    }
    .user-label {
        margin: 0.5rem 0;
        flex-direction: row;
        justify-content: space-between
    }

    .label-item {
        background: red;
        padding: 10px 20px;
    }
    .image {
    width: 100%;
    height: 700px;
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
