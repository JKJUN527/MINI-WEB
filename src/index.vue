<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
import { WxcButton, WxcPopup } from 'weex-ui'
export default {
  components: { WxcButton, WxcPopup },
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style>
* {
    margin: 0;
    padding: 0
}
.base-font-size {
    font-size: 48px;
}
.mini-font-size {
    font-size: 24px;
}

.middle-font-size {
    font-size: 36px;
}

.base-flex {
    flex-direction: row;
    align-items: center;
}
.wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.color-white {
  color: white
}

.color-gray {
  color: #98989a
}
</style>
