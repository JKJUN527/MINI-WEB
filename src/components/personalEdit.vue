<template>
    <div class="infoEdit">
        <div class="user-img">
            <image />
        </div>
        <hr />
        <div class="user-info">
            <wxc-cell title="这里是标题"
                :has-arrow="false"
                :has-top-border="true">
                <switch slot="value"></switch>
            </wxc-cell>
            <wxc-cell title="标题"
                :has-arrow="false"
                @wxcCellClicked="wxcCellClicked"
                :has-top-border="true"></wxc-cell>
            <div class="base-flex cell">
                <text class="base-font-size cell-h color-white">昵称</text>
                <input type="text">
            </div>
            <div class="base-flex cell">
                <text class="base-font-size cell-h color-white">性别</text>
                <div class="base-flex">
                    <text @click="openBottomPopup" class="base-font-size color-white">{{ sex | sexTranslate }}</text>
                </div>
            </div>
            <div class="base-flex cell">
                <text class="base-font-size cell-h color-white">坐标</text>
                <div class="btn" @click="showListCity">
                    <text class="btn-txt base-font-size">城市选择</text>
                </div>
            </div>
            <div class="base-flex cell">
                <text class="base-font-size cell-h color-white">生日</text>
                <text class="base-font-size cell-h color-white" @click="showCalendar">color{{selectedDate[0]}}</text>
            </div>
            <div class="base-flex cell" :style="{'align-items': 'flex-start'}">
                <text class="base-font-size cell-h color-white">签名</text>
                <textarea></textarea>
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
import {
  WxcCity,
  WxcCell,
  WxcPopup,
  WxcButton,
  WxcPageCalendar
} from 'weex-ui'
export default {
  components: { WxcCity, WxcCell, WxcPopup, WxcButton, WxcPageCalendar },
  data: () => ({
    animationType: 'push',
    currentCity: '',
    cityStyleType: 'list',
    value: '',
    sex: 'man',
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

.user-img {
  margin: 30px 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
}

hr {
  width: 300px;
  border: solid 3px white;
  margin-bottom: 10px;
}

/* input[type="text"],
input[type="date"] {
  width: 500px;
  height: 60px;
  line-height: 100px;
  font-size: 48px;
  border: solid 1px black;
}
input[type="radio"] {
  width: 50px;
  height: 50px;
}

textarea {
  width: 500px;
  height: 300px;
  border: solid 1px black;
}

.sex-content {
  align-items: center;
}

.btn-style {
  margin: 5px 0;
} */
</style>
