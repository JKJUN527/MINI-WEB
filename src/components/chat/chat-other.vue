<template>
    <div class="chat-other">
        <div class="other-img"></div>
        <div class="other-msg">{{ msg }}</div>
    </div>
</template>
<script>
export default {
  props: ['imgurl', 'msg']
}
</script>
<style scoped>
  .chat-other {
    margin: 0 0 30px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start
  }
  .other-img {
    margin: 0 0.2rem 0 0.4rem;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: white
  }

  .other-msg {
    padding: 25px 20px;
    max-width: 550px;
    background-color: white;
    border-radius: 24px
  }
</style>
