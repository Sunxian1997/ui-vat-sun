<!--
 * @Author: your name
 * @Date: 2021-11-01 14:05:27
 * @LastEditTime: 2021-11-08 14:29:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-vat-sun\src\App.vue
-->
<template>
  <div id="app" class="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="stylus">
@import './style/publicStyle.scss';
.app{
  padding: 20px 50px 0px 50px
  height: calc(100vh - 20px)
}

</style>
