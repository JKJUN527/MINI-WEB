<template>
    <div class="match-content">
        <div class="match-success">
            <text class="match-success-font">匹配成功</text>
            <text class="match-success-font">您和AAA已互赞</text>
        </div>
        <div class="user-group base-flex">
            <div class="user-item">
                <image class="user-img" />
                <text class="user-name">user name</text>
            </div>
            <div class="user-item">
                <image class="user-img" />
                <text class="user-name">user name</text>
            </div>
        </div>
        <div class="btn-group">
          <button class="btn chat">发送消息</button>
          <button class="btn next">继续滑动配对</button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      test: ''
    }
  }
}
</script>
<style scoped>

.match-content {
  flex-grow: 1;
  justify-content: center;
  background-color: black
}

.match-success {
  margin: 60px;
  align-items: center;
}

.match-success-font {
  font-size: 64px;
  color: white;
}

.user-group {
  margin: 40px;
  justify-content: space-around
}

.user-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: solid 5px white
}

.user-name {
  margin-top: 20px;
  text-align: center;
  font-size: 36px;
  color: white
}

.btn-group {
  align-items: center;
  justify-content: space-around
}

.btn {
  margin: 30px 0;
  width: 550px;
  height: 120px;
  line-height: 120px;
  color: white;
  font-size: 48px;
  text-align: center;
  border-radius: 10px;
}

.chat {
  background: url('../asset/img/发送消息.png');
}

.next {
  width: 585px;
  height: 130px;
  line-height: 130px;
  background: url('../asset/img/继续滑动来配对.png');
}
</style>
