<template>
  <div class="wrapper">
      <wxc-button text="试试">
      </wxc-button>
    <router-link :to="{name: 'personalEdit'}" class="router">
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

<style scoped>
  .router {
    font-size: 2rem;
  }
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
