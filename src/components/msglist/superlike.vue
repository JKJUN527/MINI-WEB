<template>
    <div class="content-super" v-if="key%2 != 0">
        <div class="super-like-notice">
            <image src="/src/asset/img/qq.jpg" />
            <text class="super-like-name">{{ name }}</text>
            <br>
            <br>
            <text class="super-like-content">{{ msg }}</text>
            <button @click="handleSendMessage">发起聊天</button>
        </div>
        <text class="like-time">13:05</text>
    </div>
</template>

<script>
export default {
  props: ['name', 'msg', 'time', 'user'],
  methods: {
    handleSendMessage () {
      this.$router.push({
        name: 'chat',
        params: {
          user: this.user
        }})
    }
  }
}
</script>

<style scoped>

    .content-super{
        width:750px;
        height:6rem;
        /*border-bottom-width:1px;*/
        align-items: center;
        /*justify-content: center;*/
        background-color: #000000;
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
        margin-top: 0.3rem;
        margin-bottom: 0.3rem;
    }
    .msg-list-content{
        height: 3rem !important;
        align-items: unset !important;
    }

    .msg-list figure{
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        margin-left: 0.3rem;
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
        background-color: #000000;
    }
</style>
