<template>
  <div>
    <router-link :to="{name: 'login'}" class="base-font-size">
      login123
    </router-link>
    <router-link :to="{name: 'index'}" class="base-font-size">
      index
    </router-link>
    <router-link :to="{name: 'otherInfo'}" class="base-font-size">
      otherInfo
    </router-link>
    <router-link :to="{name: 'ownInfo'}" class="base-font-size">
      ownInfo
    </router-link>
    <router-link :to="{name: 'match'}" class="base-font-size">
      match
    </router-link>
    <router-link :to="{name: 'personalEdit'}" class="base-font-size">
      personalEdit
    </router-link>
    <router-link :to="{name: 'msglist'}" class="base-font-size">
      msglist
    </router-link>
    <router-link :to="{name: 'shoot'}" class="base-font-size">
      shoot
    </router-link>
    <router-link :to="{name: 'chat'}" class="base-font-size">
      chat
    </router-link>
    <router-link :to="{name: 'publish'}" class="base-font-size">
      publish
    </router-link>
    <router-link :to="{name: 'msgtest'}" class="base-font-size">
      msgTest
    </router-link>
    <div>{{ data }}</div>
  </div>
</template>
<script>
import ajax from '../ajax/index.js'
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    handleClick () {
    }
  }
}
</script>
<style scoped>
</style>


