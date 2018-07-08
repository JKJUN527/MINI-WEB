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
          <button class="btn" style="background: url('../asset/img/user-info-bg.png');">发送消息</button>
          <button class="btn">继续滑动配对</button>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>

.match-content {
  flex-grow: 1;
  background-color: black
}

.match-success {
  align-items: center;
}

.match-success-font {
  font-size: 64px;
  color: white;
}

.user-group {
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
  width: 400px;
  height: 100px;
  line-height: 100px;
  font-size: 48px;
  text-align: center;
  border-radius: 10px;
}
</style>
