<template>
    <div class="chat-module">
        <div class="chat-header">
            <text class="left" @click="handleGoback('back')"></text>
            <text class="name">{{ name }}</text>
            <text class="right" @click="handleClick"></text>
        </div>
        <div class="chatting">
            <div class="chat-content">
                <div v-for="(chat, index) in data" :key="index">
                  <chat-own :imgurl="userimg" :msg='chat.test' v-if="chat.sender != otherId"></chat-own>
                  <chat-other :imgurl="otherimg" :msg='chat.test' :id="otherId" v-else></chat-other>
                </div>
            </div>
            <div id="send-block" class="base-flex">
              <input type="text" @focus="changeColor" placeholder="聊点什么吧..." v-model="text">
              <button @click="handleSendMessage">发送</button>
            </div>
        </div>
    </div>
</template>
<script>
import ajax from '../../ajax/index.js'
import ChatOwn from './chat-own'
import ChatOther from './chat-other'
export default {
  components: { ChatOwn, ChatOther },
  data () {
    return {
      otherId: 0,
      data: [],
      text: '',
      lastId: 0,
      timmer: {},
      userimg: '',
      name: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
        vm.otherId = to.params.user
        vm.otherimg = to.params.otherimg
      })
  },
  beforeRouteLeave (to, from, next) {
    clearInterval(this.timmer)
  },
  mounted () {
    ajax.getPersonInfo()
    .then(({ data }) => {
      this.userimg = data.data.img_portrait
      this.name = data.data.name
    })
    this.timmer = setInterval(() => {
      ajax.getConversationDetail({ id: this.otherId, id_greater_than: this.lastId, count: -1 })
      .then(({ data }) => {
        if(data.status === 403) {
          return
        }
        this.data = this.data.concat(data.data)
        this.lastId = (data.data.length > 0 && data.data[data.data.length - 1].id) || this.lastId
      })
    }, 1000)
  },
  methods: {
    handleGoback (e) {
//      this.$router.go(-1)
        if (e === 'back' ){
            window.location.href = 'https://mini.jkjun.cn/src/index.html#/msgtest'
        } else {
            window.location.href = 'https://mini.jkjun.cn/src/index.html#/ownInfo'
        }
    },
    handleClick () {
      clearInterval(this.timmer)
      this.$router.push({
        name: 'otherInfo',
        params: {
          user: this.otherId
        }
      })
    },
    handleSendMessage () {
      ajax.doSendMessage({user_id: this.otherId, text: this.text})
      this.text = ''
    }
  }
}
</script>
<style scoped>
    .chat-module{
        height: 100%;
        background-color: #161824;
    }
    .chat-header{
        height: 7%;
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
        background: url("/src/asset/img/backicon.png");
        background-size: cover;
        width: 0.3rem;
        height: 0.55rem;
        left: 0.4rem;
    }
    .chat-header .right{
        background: url("/src/asset/img/selficon.png");
        background-size: cover;
        width: 0.7rem;
        height: 0.7rem;
        right: 0.4rem;
    }
    .chat-header .name{
        font-size: 0.55rem;
        /*left:50%;*/
    }
  .chatting {
      height: 93%;
    position: relative;
    padding: 30px 0 0;
    flex-grow: 1;
    background-color: black;
  }
  .chat-content{
      height: 93%;
      overflow: scroll;
  }

  #send-block {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  #send-block input {
    outline: none;
    color: white;
    flex-grow: 1;
    height: 1.16rem;
    line-height: 10rem;
    padding: 2px 20px;
      background: url('/src/asset/img/input_msg.png');
      background-size: cover;
    /*border-radius: 50%;*/
  }
  #send-block input:focus{
      outline: none;
      color: white;
  }

  #send-block button {
    width: 100px;
    height: 60px;
    /*line-height: 60px;*/
    text-align: center;
    /*color: white;*/
    border: none;
    /*background-color: red;*/
    opacity:0;
      position: absolute;
      left:8.5rem;
  }
</style>
