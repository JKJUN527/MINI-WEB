<template>
  <div class="wrapper">
    <router-link :to="{name: 'personalInfo'}" class="base-font-size">
      哈哈哈
    </router-link>
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
    wxcButtonClicked () {
      alert('hahah')
    }
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
.cell {
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
}

.cell-h {
    margin-right: 40px;
}
</style>
