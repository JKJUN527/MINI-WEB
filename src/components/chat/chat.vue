<template>
    <div class="chatting">
        <div v-for="(chat, index) in data" :key="index">
          <chat-own :msg='chat.msg' v-if="chat.type === 1"></chat-own>
          <chat-other :msg='chat.msg' v-else></chat-other>
        </div>
        <div>
          
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
        msg: '1111111111111111111111'
      }, {
        type: 2,
        msg: '1111111111111111111111'
      }]
    }
  }
}
</script>
<style scoped>

  .chatting {
    padding: 30px 0 0;
    flex-grow: 1;
    background-color: black;
  }
</style>
