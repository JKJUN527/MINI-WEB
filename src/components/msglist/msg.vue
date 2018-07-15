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

    .msg-list-content{
        height: 3rem !important;
        align-items: unset !important;
        justify-content: center;
    }
    .msg-list{

    }
    .msg-list figure{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        margin-left: 0.3rem;
        /*position: absolute;*/
        /*left: -4rem;*/
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
        top: 1.1rem;
        font-size: 0.4rem;
        opacity: 0.8;
        max-width: 6rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .msg-time{
        top: 0.2rem;
        right: 0.3rem;
        font-size: 0.4rem;
        opacity: 0.8;
    }
    .msg-num{
        background: url(/src/asset/img/msg-num.png) no-repeat;
        background-size: cover;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        text-align: center;
        font-size: 0.35rem;
        top: 1rem;
        right: 0.3rem;
        padding-top: 0.15rem;
    }
</style>
