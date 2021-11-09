<!--
 * @Author: your name
 * @Date: 2021-11-01 14:51:16
 * @LastEditTime: 2021-11-08 16:21:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-vat-sun\src\views\home\home.vue
-->
<template>
  <div class="home"> 
    <!-- 头部 -->
    <app-header></app-header>
    <div class="app-layout">
      <!-- 菜单栏 -->
      <app-menu class="app-menu"></app-menu>
      <!-- 主内容 -->
      <app-main class="app-main">
      </app-main>
    </div>
  </div>
</template>

<script>
export default {
components:{
    'app-header':()=>import('../../views/layout/header.vue'),
    'app-menu':()=>import('../../views/layout/menu.vue'),
    'app-main':()=>import('../../views/layout/main.vue'),
  },
}
</script>

<style lang="stylus">
.home{
  height: 100%
  display: flex
  flex-direction: column
  .app-layout{
    flex: 1
    display: flex
    padding-top:20px
    .app-menu{
      width: 300px
    }
    .app-main{
      flex: 1
      padding-right: 20px
    }
    .app-main,.app-menu {
      height: calc(100vh - 121px)
      overflow: auto
    }
  }
}
</style>