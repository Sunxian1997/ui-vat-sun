<!--
 * @Author: your name
 * @Date: 2021-11-03 17:44:00
 * @LastEditTime: 2021-11-09 15:38:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-vat-sun\src\views\components\button\index.vue
-->
<template>
   <div>
      <h2>Button 按钮</h2>
      <p>常用的操作按钮。</p>

      <div>
         <h3>基础用法</h3>
         <span>基础的按钮用法。</span>
         <foldable-card>
            <div slot="componentSlot">
               <div>
                  <vat-button>默认按钮</vat-button>
                  <vat-button type="primary">主要按钮</vat-button>
                  <vat-button type="success">成功按钮</vat-button>
                  <vat-button type="info">信息按钮</vat-button>
                  <vat-button type="warning">警告按钮</vat-button>
                  <vat-button type="danger">错误按钮</vat-button>
               </div>
            </div>
            <div slot="codeSlot">
               &lt;div>
                  <br/>
                     &lt;vat-button>默认按钮 &lt;/vat-button>
                  <br/>
                     &lt;vat-button type="primary">主要按钮 &lt;/vat-button>
                  <br/>
                     &lt;vat-button type="success">成功按钮 &lt;/vat-button>
                  <br/>
                     &lt;vat-button type="info">信息按钮 &lt;/vat-button>
                  <br/>
                     &lt;vat-button type="warning">警告按钮 &lt;/vat-button>
                  <br/>
                     &lt;vat-button type="danger">错误按钮 &lt;/vat-button>
                  <br/>
               &lt;/div>
            </div>
         </foldable-card>
      </div>
      <div>
         <h3>基础用法</h3>
         <vat-table :data="data" :header="header" border>
      </vat-table>
    </div>
   </div>
</template>

<script>
   export default {
      components:{
         'foldable-card':()=>import('../../../components/foldableCard.vue'),
         'vat-table':()=>import('../../../components/table.vue'),
         'vat-button':()=>import('@/components/button')
      },
      data(){
         return {
            data:[
              {
                parameter:'type',
                explain:'类型',
                type:'string',
                optionalValue:'text，textarea 和其他 原生 input 的 type 值',
                defaultValue:'text',
              },
              {
                parameter:'value / v-model',
                explain:'绑定值',
                type:'string / number',
                optionalValue:'—',
                defaultValue:'—',
              },
              {
                parameter:'maxlength',
                explain:'原生属性，最大输入长度',
                type:'number',
                optionalValue:'—',
                defaultValue:'—',
              },
              {
                parameter:'minlength',
                explain:'原生属性，最小输入长度',
                type:'number',
                optionalValue:'—',
                defaultValue:'—',
              },
              {
                parameter:'placeholder',
                explain:'输入框占位文本',
                type:'string',
                optionalValue:'—',
                defaultValue:'请输入',
              },
              {
                parameter:'disabled	',
                explain:'禁用',
                type:'boolean',
                optionalValue:'—',
                defaultValue:'false',
              },
              {
                parameter:'clearable',
                explain:'是否可清空',
                type:'boolean',
                optionalValue:'—',
                defaultValue:'false',
              },
              {
                parameter:'name',
                explain:'原生属性',
                type:'string',
                optionalValue:'—',
                defaultValue:'—',
              }
            ],
            header:[
              {
                prop:'parameter',
                label:'参数',
              },
              {
                prop:'explain',
                label:'说明',
              },
              {
                prop:'type',
                label:'类型',
              },
              {
                prop:'optionalValue',
                label:'可选值',
              },
              {
                prop:'defaultValue',
                label:'默认值',
              },
            ],
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