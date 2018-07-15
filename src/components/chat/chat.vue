<template>
    <div class="chatting">
        <div v-for="(chat, index) in data" :key="index">
          <chat-own :msg='chat.test' v-if="chat.sender != otherId"></chat-own>
          <chat-other :msg='chat.test' v-else></chat-other>
        </div>
        <div id="send-block" class="base-flex">
          <input type="text" v-model="text">
          <button @click="handleSendMessage">发送</button>
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
      timmer: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // alert(JSON.stringify(to.params))
        vm.otherId = to.params.user
      })
  },
  beforeRouteLeave (to, from, next) {
    clearInterval(timmer)
  },
  mounted () {
    this.timmer = setInterval(() => {
      ajax.getConversationDetail({ id: this.otherId, id_greater_than: this.lastId, count: -1 })
      .then(({ data }) => {
        if(data.status === 403) {
          return
        }
        this.data = this.data.concat(data.data)
        this.lastId = data.data.length > 0 && data.data[data.data.length - 1].id
      })
    }, 1000)
  },
  methods: {
    handleSendMessage () {
      ajax.doSendMessage({user_id: this.otherId, text: this.text})
    },
    handleGetMessage() {

    }
  }
}
</script>
<style scoped>

  .chatting {
    position: relative;
    padding: 30px 0 0;
    flex-grow: 1;
    background-color: black;
  }

  #send-block {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  #send-block input {
    flex-grow: 1;
    height: 60px;
    line-height: 60px
  }

  #send-block button {
    width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: white;
    border: none;
    background-color: red
  }
</style>
