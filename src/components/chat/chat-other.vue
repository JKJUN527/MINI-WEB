<template>
    <div class="chat-other">
        <div class="other-img" @click="otherInfo" :style="{'background-image': `url(https://mini.jkjun.cn/media/${imgurl})`}"></div>
        <div class="other-msg">{{ msg }}</div>
    </div>
</template>
<script>
export default {
  props: ['imgurl', 'msg', 'id'],
  methods: {
    otherInfo () {
      this.$router.push({
        name: 'otherInfo',
        params: {
          user: this.id
        }
      })
    }
  }
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
    background-size: 100% 100%;
  }

  .other-msg {
    padding: 25px 20px;
    max-width: 6.5rem;
    background-color: white;
    border-radius: 24px
  }
</style>
