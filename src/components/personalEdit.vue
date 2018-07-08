<template>
    <div id="personalEdit">
        <div class="user-img">
            <image />
        </div>
        <div class="user-info">
            <wxc-cell title="昵称"
                :has-arrow="false"
                :has-top-border="true">
                <input type="text" class="text">
            </wxc-cell>
            <wxc-cell title="昵称"
                :has-arrow="false"
                :has-top-border="true">
                <div>
                    <input type="radio" class="radio">
                    <text>男</text>
                </div>
                <div>
                    <input type="radio" class="radio">
                    <text>女</text>
                </div>
            </wxc-cell>
            <wxc-cell title="昵称"
                :has-arrow="false"
                :has-top-border="true">
                <div class="btn" @click="showListCity">
                    <text class="btn-txt">城市选择</text>
                </div>
            </wxc-cell>
            <div class="user-sex input">
                <text>生日</text>
                <input type="date">
            </div>
            <div class="user-sex input">
                <text>签名</text>
                <textarea id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <scroller class="scroller">
            <div class="panel">
                <text v-if="currentCity" class="text">当前城市: {{currentCity}}</text>
            </div>
            </scroller>
            <wxc-city ref="wxcCity"
                    :animationType="animationType"
                    :currentLocation="location"
                    :cityStyleType="cityStyleType"
                    @wxcCityItemSelected="citySelect"
                    @wxcCityOnInput="onInput"></wxc-city>
    </div>
</template>
<script>
// import sourceData from './data.js'
import { WxcCity, WxcCell } from 'weex-ui'
export default {
  components: { WxcCity, WxcCell },
  data: () => ({
    animationType: 'push',
    currentCity: '',
    cityStyleType: 'list'
  }),
  mounted () {
    // 模拟定位
  },
  methods: {
    showListCity () {
      this.cityStyleType = 'list'
      this.$refs['wxcCity'].show()
    },
    showGroupCity () {
      this.cityStyleType = 'group'
      this.$refs['wxcCity'].show()
    },
    citySelect (e) {
      this.currentCity = e.item
    },
    onInput (e) {}
  }
}
</script>

<style scoped>
#personalEdit {
  padding: 0 20px;
}
.user-name {
  font-size: 1rem;
}
.input {
    flex-direction: row;
    font-size: 0.5rem;
}

.text {
    border: 1px solid black;
    display: inline-block;
    width: 6rem;
    height: 1rem;
}
</style>
