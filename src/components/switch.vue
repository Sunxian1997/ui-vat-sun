<template>
  <div
    class="vat-switch"
    :class="{
      'is-checked': value,
    }"
    @click="clickHandle"
  >
    <span class="vat-switch_core" ref="core">
      <span class="vat-switch_button"></span>
    </span>
    <input
      :name="name"
      :value="value"
      type="checkbox"
      class="vat-switch_input"
      ref="input"
    />
  </div>
</template>

<script>
export default {
  name: 'vat-switch',
  props: {
    value: {
      type: Boolean,
      defualt: false
    },
    activeColor: {
      type: String,
      defualt: ''
    },
    inactiveColor: {
      type: String,
      defualt: ''
    },
    name: {
      type: String,
      defualt: ''
    }
  },
  methods: {
    clickHandle () {
      this.$emit('input', !this.value)
      // 点击的时候修改颜色
      // 等待value改变了 在做修改
      this.$nextTick(() => {
        this.setColor()
      })
    },
    setColor () {
      // 修改开关的颜色
      if (this.activeColor || this.inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.value
    }
  },
  mounted () {
    this.setColor()
  }
}
</script>

<style lang="stylus">
.vat-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;

  .vat-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;

    .vat-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

// 选中样式
.is-checked {
  .vat-switch_core {
    border-color: #409eff;
    background-color: #409eff;

    .vat-switch_button {
      transform: translateX(20px);
    }
  }
}

// 隐藏input标签
.vat-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>