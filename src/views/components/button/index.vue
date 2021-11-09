<!--
 * @Author: your name
 * @Date: 2021-11-03 17:44:00
 * @LastEditTime: 2021-11-04 17:22:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-vat-sun\src\views\components\button\index.vue
-->
<template>
   <div>
       <h2>Input 输入框</h2>
       <div class="warning">
         <p>Input 为受控组件，它<strong>总会显示 Vue 绑定值</strong>。</p>
         <p>通常情况下，应当处理 <code>input</code> 事件，并更新组件的绑定值（或使用<code>v-model</code>）。否则，输入框内显示的值将不会改变。</p>
         <p>不支持 <code>v-model</code> 修饰符。</p>
      </div>
      <h3>基础用法</h3>
      <foldable-card></foldable-card>
   </div>
</template>

<script>
   export default {
      components:{
         'foldable-card':()=>import('../../../components/foldableCard.vue')
      },
      data(){
         return {
            value:'llll'
         }
      }
   }
</script>

<style lang='stylus' scoped>
.warning{
   padding: 8px 16px;
   background-color: #fff6f7;
   border-radius: 4px;
   border-left: 5px solid #fe6c6f;
   margin: 20px 0;
}
</style>