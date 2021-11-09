<!--
 * @Author: your name
 * @Date: 2021-11-01 15:03:37
 * @LastEditTime: 2021-11-01 15:03:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-vat-sun\src\views\layout\menu.vue
-->
<template>
  <div class="menu-page">
    <ul >
      <li v-for="(item,index) in menuRouter" :key="index">
         <label class="classification-name">{{item.classificationName}}</label>
         <div v-if="item.children">
            <ul v-for="(childrenItem,childrenIndex) in item.children" :key="childrenIndex">
              <span class="components-classification">{{childrenItem.type}}</span>
              <li v-for="componentsItem in childrenItem.children" :key="componentsItem.path" class="component-label" @click="toComponents(componentsItem)">
                {{`${componentsItem.type} ${componentsItem.name}`}}
              </li>
            </ul>
         </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {getMenuRouter} from './menuRouter/index'
export default {
  data(){
    return {
      menuRouter:getMenuRouter()
    }
  },
  created(){
    console.log('menu',this.menuRouter);
  },
  methods:{
    toComponents(item){
      this.$router.push({
        path:item.path
      })
    }
  }
}
</script>

<style lang="stylus">
.menu-page{
  ul{
    padding: 0;
    margin: 0;
    display: block;
    height: 100%
    li{
      list-style: none
      .classification-name{
        font-size: 16px;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: .15s ease-out;
        font-weight: 700;
      }
      .components-classification{
        font-size: 12px;
        color: #999;
        line-height: 26px;
        margin-top: 15px;
      }
    }
    .component-label{
      cursor: pointer !important
      display: block;
      height: 40px;
      color: #444;
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 400;
    }
  }
}
</style>