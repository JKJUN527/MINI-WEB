<template>
    <div class="chat-own">
        <div class="own-msg">{{ msg }}</div>
        <div class="own-img"></div>
    </div>
</template>
<script>
export default {
  props: ['imgurl', 'msg']
}
</script>
<style scoped>
  .chat-own {
    margin: 0 0 30px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start
  }
  .own-img {
    margin: 0 0.4rem 0 0.2rem;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: white
  }

  .own-msg {
    padding: 25px 20px;
    max-width: 550px;
    color: white;
    background-color: white;
    border-radius: 24px;
    background: url('../../asset/img/发送消息.png');
    background-size: 100% 100%;
  }
</style>
