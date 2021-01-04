<template>
  <div
    class="vat-input"
    :class="{
      'vat-input_suffix': clearable || showPassword,
    }"
  >
    <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      class="vat-input_inner"
      :class="{
        'is-disabled': disabled,
      }"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="inputHandle"
    />
    <span class="vat-input_suffix" v-if="clearable || showPassword">
      <i class="vat-icon-close" v-if="clearable && value" @click="clear"></i>
      <i
        class="vat-icon-locking"
        :class="{
          'vat-icon-locking-active': passwordVisible,
        }"
        v-if="showPassword"
        @click="changeType"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'vat-input',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 控制是否显示密码框
      passwordVisible: false
    }
  },
  methods: {
    inputHandle (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    changeType () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="stylus">
.vat-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;

  .vat-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 45, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.vat-input_suffix {
  .vat-input_inner {
    padding-right: 30px;
  }

  .vat-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;

    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .vat-icon-locking-active {
      color: blue;
    }
  }
}
</style>