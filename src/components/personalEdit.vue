<template>
    <div class="infoEdit">
        <div class="chat-header">
            <text class="left">取消</text>
            <text class="name">资料修改</text>
            <text class="right" @click="handleSave">保存</text>
        </div>
        <div class="user-img">
            <image :src="imgDataUrl" />
            <input type="file" id="upload_file" class="upload__input" @change="getFile" accept="image/png,image/gif">
        </div>
        <hr />
        <div class="user-info">
            <div class="base-flex cell">
                <text class="base-font-size cell-h color-white">昵称</text>
                <input type="text" class="color-gray" v-model="name">
                <label class="right-icon"></label>
            </div>
            <div class="base-flex cell" @click="openBottomPopup">
                <text class="base-font-size cell-h color-white">性别</text>
                <div class="base-flex">
                    <text class="color-gray">{{ sex }}</text>
                </div>
                <label class="right-icon"></label>
            </div>
            <div class="base-flex cell" @click="showListCity">
                <text class="base-font-size cell-h color-white">坐标</text>
                <div class="btn">
                    <text class="btn-txt color-gray">{{ currentCity.cityName || '选择城市' }}</text>
                </div>
                <label class="right-icon"></label>
            </div>
            <div class="base-flex cell" @click="showCalendar">
                <text class="base-font-size cell-h color-white">生日</text>
                <text class="base-font-size color-gray" @click="showCalendar">{{selectedDate[0]}}</text>
                <label class="right-icon"></label>
            </div>
            <div class="base-flex cell" :style="{'align-items': 'flex-start'}">
                <text class="base-font-size cell-h color-white">签名</text>
                <textarea class="color-gray" rows="1" v-model="signature"></textarea>
                <label class="right-icon"></label>
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
                    @wxcButtonClicked="handleSexChange('男')"></wxc-button>
                <wxc-button text="女"
                    class="btn-style"
                    type="white"
                    @wxcButtonClicked="handleSexChange('女')"></wxc-button>
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
<<<<<<< HEAD
import ajax from '../ajax/index.js'
import {
  WxcCity,
  WxcPopup,
  WxcButton,
  WxcPageCalendar
} from 'weex-ui'
=======
import {WxcCity, WxcPopup, WxcButton, WxcPageCalendar} from 'weex-ui'
>>>>>>> 56d4ee9f7feab368848e525b371d85e229ad1a05
export default {
  components: { WxcCity, WxcPopup, WxcButton, WxcPageCalendar },
  data: () => ({
    name: '',
    animationType: 'push',
    currentCity: '',
    cityStyleType: 'list',
    value: '',
    sex: '',
    imgDataUrl: '/src/asset/img/qq.jpg',
    files: 0,
    isBottomShow: false,
    currentDate: '',
    selectedDate: [],
    signature: '',
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
    ajax.getPersonInfo({})
    .then(({ data }) => {
      data = data.data
      this.currentCity = data.local
      this.name = data.name
      this.signature = data.signature
      this.imgDataUrl = data.img_portrait
    })
  },
  methods: {
<<<<<<< HEAD
    handleSave () {
      var formdata = new FormData()
      formdata.append('birth_timestamp', 1531650089047)
      formdata.append('name', this.name)
      formdata.append('sex', this.sex)
      formdata.append('local', this.currentCity.cityName)
      formdata.append('signature', this.signature)
      formdata.append('img_portrait', this.files)
      ajax.doPersonEdit(formdata)
    },
    uploadimg(){
        document.getElementById('upload_file').click()
    },
=======
>>>>>>> 56d4ee9f7feab368848e525b371d85e229ad1a05
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
          this.files = e.target.files[0]
          if (!e || !window.FileReader) return  // 看支持不支持FileReader
          let reader = new FileReader()
          reader.readAsDataURL(this.files) // 这里是最关键的一步，转换就在这里
          reader.onloadend = function () {
              _this.imgDataUrl = this.result
          }
      }
  }
}
</script>

<style scoped>
    .botttom{
        left:0;
    }
    .chat-header{
        height: 7%;
        width: 100%;
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
        /*background: url("/src/asset/img/backicon.png");*/
        /*background-size: cover;*/
        /*width: 0.3rem;*/
        /*height: 0.55rem;*/
        left: 0.4rem;
    }
    .chat-header .right{
        background: url("/src/asset/img/saveicon.png");
        background-size: cover;
        width: 1.4rem;
        height: 0.8rem;
        right: 0.4rem;
        padding:0.1rem 0 0.1rem 0.25rem;
    }
    .chat-header .name{
        font-size: 0.55rem;
        /*left:50%;*/
    }
    .right-icon{
        background: url(/src/asset/img/righticon.png);
        background-size: cover;
        width: 0.26rem;
        height: 0.5rem;
        right: 0.7rem;
        position: absolute;
    }
    .upload__input{
        width: 2.1rem;
        height: 2.1rem;
        position: absolute;
        top: 0.4rem;
        opacity: 0;
    }
.infoEdit {
  flex-grow: 1;
  align-items: center;
  background-color: black;
  color: white;
    height: 100%;
}
.user-img{
    background: url(/src/asset/img/Mask.png);
    background-size: cover;
    width: 2.3rem;
    height: 2.3rem;
    margin-top: 1rem;
}
.user-img figure{
  margin: 0.1rem 0.1rem;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: white;
  /*margin-left: 40%;*/
}

.user-info {
  margin-top: 30px;
  width: 100%
}
.base-font-size{
    font-size: 0.5rem;
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
  width: 5.9rem;
  /*height: 300px;*/
  background-color: transparent
}

.sex-content {
  align-items: center;
    position: absolute;
    right: 4.6rem;
}

.btn-style {
  margin: 5px 0;
}
</style>
