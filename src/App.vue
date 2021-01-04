<template>
  <div id="app">
    <!-- @input="(val) => (value = val) -->
    <!-- 日期 -->
    <!-- <vat-date-picker v-model="now"></vat-date-picker> -->
    <!-- 按钮 -->
    <!-- <vat-button circle @click="visible = true">按钮</vat-button>
    <vat-dialog
      @close="close"
      :visible.sync="visible"
      width="50%"
      top="35vh"
      :title="msg"
    >
      <template v-slot:footer>
        <vat-button @click="visible = false">取消</vat-button>
        <vat-button type="primary">确定</vat-button>
      </template>
    </vat-dialog> -->
    <!-- <vat-input
      placeholder="请输入"
      name="username"
      v-model="msg"
      showPassword
    ></vat-input> -->
    <!-- <vat-switch
      v-model="visible"
      activeColor="green"
      inactiveColor="red"
    ></vat-switch> -->
    <vat-radio-group v-model="gender">
      <div>
        <vat-radio label="0">男</vat-radio>
        <vat-radio label="1">女</vat-radio>
      </div>
    </vat-radio-group>
  </div>
</template>

<script>
import VatRadioGroup from './components/radio-group.vue'
export default {
  name: 'App',
  components: {
    VatRadioGroup
  },
  data () {
    return {
      now: new Date(),
      msg: '温馨提示',
      visible: false,
      gender: 1,
      lable: '男'
    }
  },
  watch: {
  },
  methods: {
    click (e) {
      console.log('e', e);
    },
    // 关闭模态框
    close (visible) {
      this.visible = visible
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
