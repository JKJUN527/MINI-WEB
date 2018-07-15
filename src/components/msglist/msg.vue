<template>
    <div class="content msg-list-content">
        <div class="msg-list">
            <image src="/src/asset/img/qq.jpg" />
            <text class="msg-name">{{ name }}</text>
            <text class="msg-time">{{ new Date(time).getHours() + ':' + new Date(time).getMinutes() }}</text>
            <text class="msg-content">{{ msg }}</text>
            <text class="msg-num">{{ unreadCount }}</text>
        </div>
    </div>
</template>

<script>
export default {
  props: ['name', 'time', 'msg', 'unreadCount']
}
</script>

<style scoped>

    .content{
        width:750px;
        height:5rem;
        align-items: center;
        justify-content: center;
        background-color: #000000;
    }

    .msg-list{

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
</style>
