<template>
        <wxc-tab-page ref="wxc-tab-page"
                      :tab-titles="tabTitles"
                      :tab-styles="tabStyles"
                      :msgnum="msgnum"
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
                        <div class="content-super" v-if="key%2 != 0">
                            <div class="super-like-notice">
                                <image src="/src/asset/img/qq.jpg" />
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
                                <text class="msg-content">你视频拍的很不错喔！想认识一下吗？</text>
                                <text class="msg-num">5</text>
                            </div>
                        </div>
                    </wxc-pan-item>
                </cell>
            </list>
        </wxc-tab-page>
</template>
<script>
import { WxcTabPage, WxcPanItem, Utils, BindEnv } from 'weex-ui'
import ajax from '../ajax/index.js'
import Config from './config'

export default {
  components: { WxcTabPage, WxcPanItem },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    msgnum:5,
    tabList: [],
    demoList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    tabPageHeight: 1334
  }),
  created () {
    this.tabPageHeight = Utils.env.getPageHeight()
    this.tabList = [...Array(this.tabTitles.length).keys()].map(i => [])
    this.$set(this.tabList, 0, this.demoList)
  },
  mounted () {
      ajax.getConversationList({})
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
        margin-top: 0.6rem;
        justify-content: center
    }
    .like-notice p{
        color: white;
        font-size: 0.5rem;
        text-align: center;
    }
    .like-time{
        text-align: center;
        color: white;
        margin-top: 0.7rem;
        font-size: 0.35rem;
        opacity: 0.8;
    }
    .super-like-notice{
        padding: 25px;
        background-color:#f2f3f4;
        border-radius:20px;
        /*opacity: 0.5;*/
        width: 80%;
        min-height: 3.8rem;
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
        width: 38%;
        height: 0.8rem;
        background-size: cover;
        margin-left: 32%;
        margin-top: 0.6rem;
        color: white;
        font-size: 0.45rem;
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
        margin-top: 0.6rem;
    }
    .msg-list-content{
        height: 3rem !important;
        align-items: unset !important;
        justify-content: center;
    }
    .msg-list{

    }
    .msg-list figure{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
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
        top: 1.1rem;
        font-size: 0.4rem;
        opacity: 0.8;
        max-width: 6rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .msg-time{
        top: 0.2rem;
        right: 0.3rem;
        font-size: 0.4rem;
        opacity: 0.8;
    }
    .msg-num{
        background: url(/src/asset/img/msg-num.png) no-repeat;
        background-size: cover;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        text-align: center;
        font-size: 0.35rem;
        top: 1rem;
        right: 0.3rem;
        padding-top: 0.15rem;
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
        /*justify-content: center;*/
        background-color: #000000;
    }
    .content-super{
        width:750px;
        height:6rem;
        /*border-bottom-width:1px;*/
        align-items: center;
        /*justify-content: center;*/
        background-color: #000000;
    }
    .title-item .border-bottom{
        width: 0.3rem !important;
        height: 0.3rem !important;
        background: url(/src/asset/img/right-page.png) no-repeat transparent !important;
    }
</style>
