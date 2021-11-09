<!--
 * @Author: your name
 * @Date: 2021-11-04 11:04:16
 * @LastEditTime: 2021-11-05 17:35:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-vat-sun\src\components\foldableCard.vue
-->
<template>
   <div class="demo-block demo-zh-CN demo-input">
      <div class="source">
         <slot name="componentSlot"></slot>
      </div>
      <div class="meta" v-if="isShowMeta" >
         <div class="description">
            <pre>
               <code>
                  <slot name="codeSlot"></slot>
               </code>
            </pre>
         </div>
      </div>
      <div class="demo-block-control" @mouseenter="isShowCode = true" @mouseleave="isShowCode = false" @click="isShowMeta = !isShowMeta">
         <i class="iconfont " :class="{
            'icon-zhankai':!isShowMeta,
            'icon-shousuo':isShowMeta,
         }"></i>
         <span v-if="isShowCode" class="show-code" :class="{'color-blue':isShowCode}">{{isShowMeta ? '隐藏代码' : '显示代码'}}</span>
      </div>
   </div>
</template>

<script>
   export default {
      data(){
         return{
            isShowCode: false,
            isShowMeta: false
         }
      }
   }
</script>

<style lang='stylus' scoped>
.demo-block{
   .color-blue{
      color: #409eff
   }
   border: 1px solid #ebebeb;
   border-radius: 3px
   transition: .2s;
   transition-property: all;
   transition-duration: 0.2s;
   transition-timing-function: ease;
   transition-delay: 0s;
   .source{
      padding: 24px
   }
   .meta{
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow: hidden;
      transition: height .2s;
      .description{
         padding: 18px 24px
      }
   }
   .demo-block-control{
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      display: flex
      align-items: center
      justify-content: center
      .show-code{
         display:block
      }
   }
}
</style>