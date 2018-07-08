<template>
    <div id="personalInfo">
        <!-- <div class="edit">编辑</div> -->
        <div class="user-header base">
            <div class="user-img">
                <image src='' />
            </div>
            <text class="user-name base-font-size">user name</text>
        </div>
        <div class="user-signature">
            <text class="little-font-size color-white" style="{text-align: center}">个性签名： XXXXXXXXXXXXXXXXXXXXXXXXX</text>
        </div>
        <div class="user-label">
            <text v-for="(label, key) in labels" :key="key" class="label-item base-font-size" >{{ label }}</text>
        </div>
        <div class="video-block">
            <div class="tab-group base-flex">
                <text class="base-font-size color-white tab">作品</text>
            </div>
            <div v-if="showVideoList == 'works'" class="color-white video-list">
                <!-- <img src="../asset/img/user-info-bg.png" alt="" class="bg" /> -->
                作品集
            </div>
            <div v-if="showVideoList == 'like'" class="color-white video-list">
                <!-- <img src="../asset/img/user-info-bg.png" alt="" class="bg" /> -->
                喜欢集
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      labels: ['北京', '20岁', '双子座', '男'],
      showVideoList: 'works'
    }
  },
  methods: {
    doListChange (msg) {
      this.showVideoList = msg
    }
  },
  watch: {
    showVideoList: function () {}
  }
}
</script>
<style scoped>
    #personalInfo {
        position: relative;
        background: #1c1f1f;
        flex: 1
    }

    .user-header {
        margin-top: 1.5rem;
        align-items: center;
    }

    .user-img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background: white
    }
    .user-name {
        color: white;
        margin-top: 25px;
    }
    .user-label {
        margin: 0.5rem 0;
        flex-direction: row;
        justify-content: space-around
    }

    .label-item {
        min-width: 2rem;
        text-align: center;
        color: white;
        border-radius: 20px;
        background: #807773;
    }

    .video-block {
        flex-grow: 1
    }

    .tab-group {
        padding: 20px 0;
        justify-content: center;
        background: #010813
    }

    .tab {
        margin: 0 40px;
    }

    .video-list {
        flex-grow: 1;
        background: url('../asset/img/user-info-bg.png');
        background-size: cover
    }

    .bg {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0
    }

</style>
