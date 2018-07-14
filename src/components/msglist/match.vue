<template>
    <div class="content">
        <div class="like-notice">
            <text>你收到一个like</text>
        </div>
        <text class="like-time">13:05</text>
    </div>
</template>

<script>
export default {
    props: ['name']
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
    
    .like-notice{
        padding: 25px;
        background: url("/src/asset/img/like-bg.png") no-repeat;
        background-size: cover;
        border-radius:20px;
        width: 80%;
        min-height: 1.7rem;
        height: auto;
    }
    
    .like-notice p{
        color: white;
        font-size: 0.5rem;
        text-align: center;
    }

    .like-time{
        text-align: center;
        color: white;
        margin-top: 0.4rem;
    }

</style>
