<!--
 * @Author: your name
 * @Date: 2021-11-03 17:16:28
 * @LastEditTime: 2021-11-09 15:24:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ui-vat-sun\src\views\components\input\index.vue
-->
<template>
  <div>
    <h2>Input 输入框</h2>
    <div class="warning">
      <p>Input 为受控组件，它<strong>总会显示 Vue 绑定值</strong>。</p>
      <p>通常情况下，应当处理 <code>input</code> 事件，并更新组件的绑定值（或使用<code>v-model</code>）。否则，输入框内显示的值将不会改变。</p>
      <p>不支持 <code>v-model</code> 修饰符。</p>
    </div>
    <div>
      <h3>基础用法</h3>
      <foldable-card>
        <div slot="componentSlot">
          <vat-input v-model="normalValue"></vat-input>
        </div>
        <div slot="codeSlot">
          &lt;vat-input v-model="input" placeholder="请输入内容"/&gt;
        </div>
      </foldable-card>
    </div>

    <div>
      <h3>禁用状态</h3>
      <foldable-card>
        <div slot="componentSlot">
          <vat-input v-model="disabledInput" disabled></vat-input>
        </div>
        <div slot="codeSlot">
          &lt;vat-input v-model="input" disabled placeholder="请输入内容"/&gt;
        </div>
      </foldable-card>
    </div>

    <div>
      <h3>可清空</h3>
      <foldable-card>
        <div slot="componentSlot">
          <vat-input v-model="clearableInput" clearable></vat-input>
        </div>
        <div slot="codeSlot">
          &lt;vat-input v-model="input" clearable placeholder="请输入内容"/&gt;
        </div>
      </foldable-card>
    </div>

    <div>
      <h3>密码框</h3>
      <foldable-card>
        <div slot="componentSlot">
          <vat-input v-model="passwordInput" type='password'></vat-input>
        </div>
        <div slot="codeSlot">
          &lt;vat-input v-model="input" type='password' placeholder="请输入内容"/&gt;
        </div>
      </foldable-card>
    </div>

    <div>
      <h3>Input Attributes</h3>
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
         'vat-input':()=>import('@/components/input')
      },
      data(){
         return {
            normalValue:'',
            disabledInput:'',
            clearableInput:'',
            passwordInput:'',
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
      },
      computed:{
      },
      created(){
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