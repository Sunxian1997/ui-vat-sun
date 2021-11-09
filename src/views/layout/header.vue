<!--
 * @Author: your name
 * @Date: 2021-11-01 15:03:16
 * @LastEditTime: 2021-11-02 14:06:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-vat-sun\src\views\layout\header.vue
-->
<template>
  <div class="header">
      <h1>
        <a href="">
          <img src="../../assets/logo.png" alt="">
        </a>
      </h1>
      <div class="option">
        <vat-input v-model="search" placeholder="搜索文档"></vat-input>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      search:''
    }
  }
}
</script>

<style lang="stylus">
.header{
  height: 80px
  border-bottom: 1px solid #dcdfe6
  display: flex
  justify-content: space-between
  align-items: center
  h1{
    a{
      img{
        height: 60px
      }
    }
  }
}
</style>