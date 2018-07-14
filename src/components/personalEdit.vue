<template>
    <div class="infoEdit">
        <div class="user-img" @click="uploadimg">
            <image :src="imgDataUrl" />
            <input type="file" id="upload_file" style="display: none" class="upload__input" @change="getFile" accept="image/png,image/gif">
        </div>
        <hr />
        <div class="user-info">
            <div class="base-flex cell">
                <text class="base-font-size cell-h color-white">昵称</text>
                <input type="text" class="color-gray" v-model="name">
            </div>
            <div class="base-flex cell" @click="openBottomPopup">
                <text class="base-font-size cell-h color-white">性别</text>
                <div class="base-flex">
                    <text class="color-gray">{{ sex | sexTranslate }}</text>
                </div>
            </div>
            <div class="base-flex cell" @click="showListCity">
                <text class="base-font-size cell-h color-white">坐标</text>
                <div class="btn">
                    <text class="btn-txt color-gray">{{ currentCity.cityName || '选择城市' }}</text>
                </div>
            </div>
            <div class="base-flex cell" @click="showCalendar">
                <text class="base-font-size cell-h color-white">生日</text>
                <text class="base-font-size color-gray" @click="showCalendar">{{selectedDate[0]}}</text>
            </div>
            <div class="base-flex cell" :style="{'align-items': 'flex-start'}">
                <text class="base-font-size cell-h color-white">签名</text>
                <textarea class="color-gray"></textarea>
            </div>
        </div>
        <wxc-popup popup-color="gray"
            :show="isBottomShow"
            @wxcPopupOverlayClicked="popupOverlayBottomClick"
            pos="bottom"
            height="300">
            <div class="sex-content">
                <wxc-button text="男"
                    class="btn-style"
                    type="white"
                    @wxcButtonClicked="handleSexChange('man')"></wxc-button>
                <wxc-button text="女"
                    class="btn-style"
                    type="white"
                    @wxcButtonClicked="handleSexChange('woman')"></wxc-button>
                <wxc-button text="取消"
                    class="btn-style"
                    type="white"
                    @wxcButtonClicked="handleSexChange()"></wxc-button>
            </div>
        </wxc-popup>
        <wxc-city ref="wxcCity"
                :animationType="animationType"
                :currentLocation="location"
                :cityStyleType="cityStyleType"
                @wxcCityItemSelected="citySelect"
                @wxcCityOnInput="onInput"></wxc-city>
        <wxc-page-calendar :date-range="dateRange"
                       :animationType="animationType"
                       :selected-date="selectedDate"
                       :selected-note="selectedNote"
                       :is-range="isRange"
                       :minibar-cfg="minibarCfg"
                       :desc-list="descList"
                       @wxcPageCalendarBackClicked="wxcPageCalendarBackClicked"
                       @wxcPageCalendarDateSelected="wxcPageCalendarDateSelected"
                       ref="wxcPageCalendar"></wxc-page-calendar>
    </div>
</template>
<script>
const test = weex.requireModule('picker')
import {
  WxcCity,
  WxcPopup,
  WxcButton,
  WxcPageCalendar
} from 'weex-ui'
export default {
  components: { WxcCity, WxcPopup, WxcButton, WxcPageCalendar },
  data: () => ({
    name: '董宇辰',
    animationType: 'push',
    currentCity: '',
    cityStyleType: 'list',
    value: '',
    sex: 'man',
    imgDataUrl: '/src/asset/img/qq.jpg',
    files: '',
    isBottomShow: false,
    currentDate: '',
    selectedDate: [],
    isRange: false,
    calendarTitle: '选择日期',
    dateRange: ['2017-06-10', '2018-06-10'],
    selectedNote: ['生日'],
    minibarCfg: {
      title: '日期选择'
    },
    descList: []
  }),
  mounted () {
    // 模拟定位
  },
  methods: {
    uploadimg(){
        alert(123)
        document.getElementById('upload_file').click()
    },
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
    onInput (e) {},
    openBottomPopup () {
      this.isBottomShow = true
    },
    popupOverlayBottomClick () {
      this.isBottomShow = false
    },
    handleSexChange (sex) {
      this.sex = sex === '' ? this.sex : sex
      this.isBottomShow = false
    },
    wxcPageCalendarDateSelected (e) {
      this.selectedDate = e.date
      this.currentDate = e.date
    },
    wxcPageCalendarBackClicked () {},
    showCalendar () {
      this.isRange = false
      setTimeout(() => {
        this.$refs['wxcPageCalendar'].show()
      }, 10)
    },
    showReturnCalendar () {
      this.isRange = true
      setTimeout(() => {
        this.$refs['wxcPageCalendar'].show()
      }, 10)
    },
      getFile (e) {
          let _this = this
          var files = e.target.files[0]
          if (!e || !window.FileReader) return  // 看支持不支持FileReader
          let reader = new FileReader()
          reader.readAsDataURL(files) // 这里是最关键的一步，转换就在这里
          reader.onloadend = function () {
              _this.imgDataUrl = this.result
          }
      }
  },
  filters: {
    sexTranslate (sex) {
      return sex === 'man' ? '男' : '女'
    }
  }
}
</script>

<style scoped>
.infoEdit {
  flex-grow: 1;
  align-items: center;
  background-color: black;
  color: white;
}

.user-img figure{
  margin: 30px 0;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: white;
  margin-left: 40%;
}

.user-info {
  margin-top: 30px;
  width: 100%
}

.cell {
    width: 100%;
    padding: 20px 80px;
    flex-direction: row;
    align-items: center;
    background-color: #161824
}

.cell-h {
    margin-right: 40px;
}
input[type="text"]{
  width: 500px;
  height: 60px;
  line-height: 100px;
  background-color: transparent
}

textarea {
  width: 500px;
  height: 300px;
  background-color: transparent
}

.sex-content {
  align-items: center;
}

.btn-style {
  margin: 5px 0;
}
</style>
