<template>
    <div id="personalEdit">
        <div class="user-img">
            <image />
        </div>
        <div class="user-info">
            <div class="base-flex cell">
                <text class="base-font-size cell-h">昵称</text>
                <input type="text">
            </div>
            <div class="base-flex cell">
                <text class="base-font-size cell-h">性别</text>
                <div class="base-flex">
                    <div class="base-flex">
                        <input type="radio">
                        <text class="base-font-size">男</text>
                    </div>
                    <div class="base-flex">
                        <input type="radio">
                        <text class="base-font-size">女</text>
                    </div>
                </div>
            </div>
            <div class="base-flex cell">
                <text class="base-font-size cell-h">坐标</text>
                <div class="btn" @click="showListCity">
                    <text class="btn-txt base-font-size">城市选择</text>
                </div>
            </div>
            <div class="base-flex cell">
                <text class="base-font-size cell-h">生日</text>
                <input type="date">
            </div>
            <div class="base-flex cell" :style="{'align-items': 'flex-start'}">
                <text class="base-font-size cell-h">签名</text>
                <textarea></textarea>
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
import { WxcCity, WxcCell } from 'weex-ui'
export default {
  components: { WxcCity, WxcCell },
  data: () => ({
    animationType: 'push',
    currentCity: '',
    cityStyleType: 'list',
    value: ''
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

    input[type='text'],
    input[type='date'] {
        width: 500px;
        height: 60px;
        line-height: 100px;
        font-size: 48px;
        border: solid 1px black;
    }
    input[type='radio'] {
        width: 50px;
        height: 50px;
    }

    textarea {
        width: 500px;
        height: 300px;
        border: solid 1px black
    }
</style>
