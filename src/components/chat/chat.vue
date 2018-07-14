<template>
    <div class="chatting">
        <div v-for="(chat, index) in data" :key="index">
          <chat-own :msg='chat.msg' v-if="chat.type === 1"></chat-own>
          <chat-other :msg='chat.msg' v-else></chat-other>
        </div>
        <div id="send-block" class="base-flex">
          <input type="text" @focus="changeColor" placeholder="聊点什么吧...">
          <button @click="send_msg">发送</button>
        </div>
    </div>
</template>
<script>
import ChatOwn from './chat-own'
import ChatOther from './chat-other'
export default {
  components: { ChatOwn, ChatOther },
  data () {
    return {
      data: [{
        type: 1,
        msg: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
      }, {
        type: 2,
        msg: 'hi,认识你很高兴，你是哪个班的？'
      }, {
        type: 2,
        msg: '1111111111111111111111'
      }]
    }
  },
    methods: {
        send_msg () {
            alert(123);
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
