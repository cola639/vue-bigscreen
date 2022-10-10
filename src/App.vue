<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import utils from '@/utils'
export default {
  name: 'App',
  beforeCreate() {
    // get query params || localStorage token
    // dispatch store
    console.log('getUrlParam', utils.getUrlParam('code'))
    console.log('getUrlParams', utils.getUrlParams(window.location.href))
  }
}
</script>
<style lang="scss"></style>
