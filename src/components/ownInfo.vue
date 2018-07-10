<template>
    <div id="personalInfo">
        <!-- <div class="edit">编辑</div> -->
        <div class="user-header base-flex">
            <div class="user-img">
                <image src='' />
            </div>
            <div class="user-base-info">
                <text class="user-name base-font-size">user name</text>
                <div class="user-label">
                    <text v-for="(label, key) in labels" :key="key" class="label-item middle-font-size" >{{ label }}</text>
                </div>
            </div>
        </div>
        <div class="user-signature">
            <text class="color-white">个性签名</text>
            <text class="color-white" style="{text-align: center}">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</text>
        </div>
        <div class="edit-block">
            <button class="edit-btn middle-font-size">编辑资料</button>
        </div>
        <div class="video-block">
            <div class="tab-group base-flex">
                <text class="base-font-size color-white tab">作品</text>
                <text class="base-font-size color-white tab">|</text>
                <text class="base-font-size color-white tab">Like</text>
            </div>
            <div v-if="showVideoList == 'works'" class="color-white video-list">
                作品集
            </div>
            <div v-if="showVideoList == 'like'" class="color-white video-list">
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
    }

    .user-img {
        margin: 0 20px;
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
        background: white
    }
    .user-name {
        color: white;
        margin-top: 25px;
    }
    .user-label {
        margin: 20px 0;
        flex-direction: row;
    }

    .label-item {
        margin: 0 10px;
        padding: 0 20px;
        text-align: center;
        color: white;
        border-radius: 10px;
        background: #807773;
    }

    .user-signature  {
        padding: 0 40px;
        margin-top: 100px;
    }

    .edit-block {
        margin: 20px 0;
        align-items: flex-end
    }

    .edit-btn {
        margin-top: 30px;
        margin-right: 20px;
        padding: 0 10px;
        border-radius: 10px;
        color: white;
        background: #143640;
    }

    .video-block {
        flex-grow: 1
    }

    .tab-group {
        padding: 15px 0;
        justify-content: center;
        background: #010813
    }

    .tab {
        margin: 0 60px;
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
