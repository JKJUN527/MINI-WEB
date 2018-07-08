<template>
    <div class="login-form">
        <image src="/src/asset/img/qq.jpg"></image>
        <text v-on:click="loginEvent">QQ一键登录</text>
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
            server.login({
                'pic':"test.jpg"

            })
                    .then(data => {console.log(data)})
                    .catch(err => {console.log(err)})
        }
    }
}
</script>
<style scoped>
    .login-form figure{
        width: 200px;
        height: 200px;
        margin-left: 33%;
        margin-top: 20%;
    }
    .login-form p{
        width: 80%;
        margin-left: 10%;
        margin-top: 1rem;
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        color: #333;
        text-align: center;
        text-shadow: 0 1px 1px rgba(255,255,255,0.75);
        vertical-align: middle;
        cursor: pointer;
        background-color: #f5f5f5;
        background-image: -moz-linear-gradient(top,#fff,#e6e6e6);
        background-image: -webkit-gradient(linear,0 0,0 100%,from(#fff),to(#e6e6e6));
        background-image: -webkit-linear-gradient(top,#fff,#e6e6e6);
        background-image: -o-linear-gradient(top,#fff,#e6e6e6);
        background-image: linear-gradient(to bottom,#fff,#e6e6e6);
        background-repeat: repeat-x;
        border: 1px solid #ccc;
        border-color: #e6e6e6 #e6e6e6 #bfbfbf;
        border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
        border-bottom-color: #b3b3b3;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
        -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.05);
    }
</style>
