<template>
    <div class="login-form">
        <image src="/src/asset/img/qq.jpg"></image>
        <button v-on:click="loginEvent">QQ一键登录</button>
    </div>
</template>
<script>
import server from '../ajax/index'
export default {
  data () {
    return {}
  },
  methods: {
    loginEvent: function (event) {
      server
        .login({
          pic: 'test.jpg'
        })
        .then(data => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
    .login-form{
        height: 100%;
        background: url("/src/asset/img/login-bg.png") no-repeat;
        background-size: cover;
        background-color: black;
    }
.login-form figure {
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    margin-left: 33%;
    margin-top: 45%;
}
.login-form button {
    width: 5rem;
    height: 1.4rem;
    background: url(/src/asset/img/icon.png) no-repeat;
    background-size: cover;
    margin-left: 28%;
    margin-top: 1rem;
    color: white;
    font-size: 0.6rem;
    text-align: center;
}
</style>
