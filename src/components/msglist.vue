<template>
    <wxc-tab-page ref="wxc-tab-page"
                  :tab-titles="tabTitles"
                  :tab-styles="tabStyles"
                  title-type="icon"
                  :tab-page-height="tabPageHeight"
                  @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
        <list v-for="(v,index) in tabList"
              :key="index"
              class="item-container"
              :style="{ height: (tabPageHeight - tabStyles.height) + 'px'}"
              v-if="index === 0">
            <cell class="border-cell"></cell>
            <cell v-for="(demo,key) in v"
                  class="cell"
                  :key="key">
                <wxc-pan-item :ext-id="'1-' + (v) + '-' + (key)"
                              url=""
                              @wxcPanItemPan="wxcPanItemPan">
                    <div class="content" v-if="key%2 === 0">
                        <div class="like-notice">
                            <text>{{key}}你收到一个like</text>
                        </div>
                        <text class="like-time">13:05</text>
                    </div>
                    <div class="content" v-if="key%2 != 0">
                        <div class="super-like-notice">
                            <image src="/src/asset/img/qq.jpg"></image>
                            <text class="super-like-name">jkjun</text>
                            <br>
                            <br>
                            <text class="super-like-content">好喜欢你的视频，超级喜欢你</text>
                            <button>发起聊天</button>
                        </div>
                        <text class="like-time">13:05</text>
                    </div>
                </wxc-pan-item>
            </cell>
        </list>
        <list v-for="(v,index) in tabList"
              :key="index"
              class="item-container"
              :style="{ height: (tabPageHeight - tabStyles.height) + 'px'}"
              v-if="index === 1">
            <cell class="border-cell"></cell>
            <cell v-for="(demo,key) in v"
                  class="cell"
                  :key="key">
                <wxc-pan-item :ext-id="'1-' + (v) + '-' + (key)"
                              url=""
                              @wxcPanItemPan="wxcPanItemPan">
                    <div class="content msg-list-content">
                        <div class="msg-list">
                            <image src="/src/asset/img/qq.jpg"></image>
                            <text class="msg-name">大概是肖宇</text>
                            <text class="msg-time">12:30</text>
                            <text class="msg-content">你视频拍的很不错喔！可以认识一下吗？</text>
                            <text class="msg-num">5</text>
                        </div>
                    </div>
                </wxc-pan-item>
            </cell>
        </list>
    </wxc-tab-page>
</template>
<script>
//    const dom = weex.requireModule('dom');
import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui'

// https://github.com/alibaba/weex-ui/blob/master/example/tab-page/config.js
import Config from './config'

export default {
  components: { WxcTabPage, WxcPanItem },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    tabList: [],
    demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    tabPageHeight: 1334
  }),
  created () {
    this.tabPageHeight = Utils.env.getPageHeight()
    this.tabList = [...Array(this.tabTitles.length).keys()].map(i => [])
    this.$set(this.tabList, 0, this.demoList)
  },
  methods: {
    wxcTabPageCurrentTabSelected (e) {
      const self = this
      const index = e.page
      /* Unloaded tab analog data request */
      if (!Utils.isNonEmptyArray(self.tabList[index])) {
        setTimeout(() => {
          this.$set(self.tabList, index, self.demoList)
        }, 100)
      }
    },
    wxcPanItemPan (e) {
      if (BindEnv.supportsEBForAndroid()) {
        this.$refs['wxc-tab-page'].bindExp(e.element)
      }
    }
  }
}
</script>
<style scoped>
    .like-notice{
        padding: 25px;
        /*background-color:#f2f3f4;*/
        background: url("/src/asset/img/like-bg.png") no-repeat;
        background-size: cover;
        border-radius:20px;
        /*opacity: 0.5;*/
        width: 80%;
        min-height: 1.7rem;
        height: auto;
        /*color: #ffffff;*/
    }
    .like-notice p{
        color: white;
        font-size: 0.5rem;
        text-align: center;
    }
    .like-time{
        text-align: center;
        color: white;
        margin-top: 0.4rem;
    }
    .super-like-notice{
        padding: 25px;
        background-color:#f2f3f4;
        border-radius:20px;
        /*opacity: 0.5;*/
        width: 80%;
        min-height: 3rem;
        height: auto;
        background:url(/src/asset/img/superlike.png) no-repeat;
        background-size: cover;
    }
    .super-like-notice figure{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 0.9rem;
        position: absolute;
        top: -1rem;
        left: 3.1rem;
    }
    .super-like-notice button{
        background: url("/src/asset/img/icon.png") no-repeat;
        width: 40%;
        height: 0.8rem;
        background-size: cover;
        margin-left: 30%;
        margin-top: 0.5rem;
        color: white;
        font-size: 0.5rem;
        text-align: center;
    }
    .super-like-notice .super-like-name{
        text-align: center;
        top:0.6rem;
        color: white;
    }
    .super-like-notice .super-like-content{
        font-size: 0.5rem;
        text-align: center;
        color: white;
    }
    .msg-list-content{
        height: 3rem !important;
        align-items: unset !important;
    }
    .msg-list{

    }
    .msg-list figure{
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        margin-left: 0.3rem;
        /*position: absolute;*/
        /*left: -4rem;*/
    }
    .msg-list p{
        color: white;
        position: absolute;
    }
    .msg-name{
        left: 2.5rem;
        top: 0.2rem;
        font-size: 0.5rem;
    }
    .msg-content{
        left: 2.5rem;
        top: 1.3rem;
        font-size: 0.35rem;
        opacity: 0.8;
    }
    .msg-time{
        top: 0.2rem;
        right: 0.3rem;
        font-size: 0.39rem;
        opacity: 0.8;
    }
    .msg-num{
        background: url(/src/asset/img/msg-num.png) no-repeat;
        background-size: cover;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.4rem;
        text-align: center;
        font-size: 0.45rem;
        top: 1.2rem;
        right: 0.3rem;
        padding-top: 0.1rem;
    }
    .item-container {
        width: 750px;
        /*background-color: #f2f3f4;*/
        background-color: #000000;
    }

.border-cell {
  background-color: #000000;
  width: 750px;
  /*height: 24px;*/
  align-items: center;
  justify-content: center;
  /*border-bottom-width: 1px;*/
  /*border-style: solid;*/
  /*border-color: #e0e0e0;*/
}

.cell {
  /*background-color: #ffffff;*/
  margin-bottom: 0;
}

    .content{
        width:750px;
        height:5rem;
        /*border-bottom-width:1px;*/
        align-items: center;
        justify-content: center;
        background-color: #000000;
    }
    .title-item .border-bottom{
        width: 0.3rem !important;
        height: 0.3rem !important;
        background: url(/src/asset/img/right-page.png) no-repeat transparent !important;
    }
</style>
