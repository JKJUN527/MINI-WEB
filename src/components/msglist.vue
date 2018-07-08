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
              :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
            <cell class="border-cell"></cell>
            <cell v-for="(demo,key) in v"
                  class="cell"
                  :key="key">
                <wxc-pan-item :ext-id="'1-' + (v) + '-' + (key)"
                              url="https://h5.m.taobao.com/trip/ticket/detail/index.html?scenicId=2675"
                              @wxcPanItemPan="wxcPanItemPan">
                    <div class="content" v-if="key%2 === 0">
                        <div class="like-notice">
                            <text>{{key}}你收到一个like</text>
                        </div>
                        <!--<div class="super-like-notice" v-if="key%2 != 0">-->
                            <!--<text>{{key}}</text>-->
                        <!--</div>-->
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
        background-color:#f2f3f4;
        border-radius:20px;
        opacity: 0.5;
        width: 80%;
        min-height: 1.7rem;
        height: auto;
        /*color: #ffffff;*/
    }
    .like-notice p{
        color: #000000;
        /*font-size: 0.6rem;*/
        text-align: center;
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
        background-color: #ffffff;
        margin-bottom: 0;
    }

    .content{
        width:750px;
        height:300px;
        /*border-bottom-width:1px;*/
        align-items: center;
        justify-content: center;
        background-color: #000000;
    }
</style>