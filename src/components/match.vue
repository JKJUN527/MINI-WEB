<template>
    <div class="match-content">
        <div class="match-success">
            <text class="base-font-size color-white">匹配成功!</text>
            <text class="match-success-font">您和AAA已匹配成功</text>
        </div>
        <div class="user-group base-flex">
            <div class="user-item">
                <image class="user-img" />
                <text class="user-name">user name</text>
            </div>
            <div class="heart-beat"></div>
            <div class="user-item">
                <image class="user-img" />
                <text class="user-name">user name</text>
            </div>
        </div>
        <div class="btn-group">
          <button class="btn chat" style="background-size: 100% 100%">去聊天嘛</button>
          <button class="btn next" style="background-size: 100% 100%">我再看看</button>
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
  margin: 81px 0;
  align-items: center;
}

.match-success-font {
  font-size: 32px;
  color: white;
}

.user-group {
  justify-content: center
}

.heart-beat {
  width: 2rem;
  background-size: 100% 100%;
  height: 1rem;
  background-image: url('../asset/img/心跳.png');
}

.user-img {
  margin: 0 20px;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: solid 2px white
}

.user-name {
  margin-top: 20px;
  text-align: center;
  font-size: 36px;
  color: white
}

.btn-group {
  margin-top: 40px;
  align-items: center;
  justify-content: space-around
}

.btn {
  margin: 30px 0;
  width: 252px;
  height: 70px;
  line-height: 70px;
  color: white;
  font-size: 36px;
  text-align: center;
  border-radius: 10px;
}

.chat {
  background: url('../asset/img/Rectangle 3 Copy.png');
}

.next {
  background: url('../asset/img/Rectangle 3 Copy 3.png');
}
</style>
