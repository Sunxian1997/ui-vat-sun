<template>
  <label
    class="vat-radio"
    :class="{
      'is-checked': label == model,
    }"
  >
    <span class="vat-radio_input">
      <span class="vat-radio_inner"></span>
      <input
        v-model="model"
        type="radio"
        :name="name"
        :value="label"
        class="vat-radio_original"
      />
    </span>
    <span class="vat-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'vat-radio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: [String],
      default: ''
    },
    // 不做类型校验 因为最终要得到的是lable的值
    value: null,
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 出发父组件的input事件 修改值
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
.vat-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  .vat-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .vat-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }

    .vat-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .vat-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}

// 选中的样式
.vat-radio.is-checked {
  .vat-radio_input {
    .vat-radio_inner {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .vat-radio_label {
    color: #409eff;
  }
}
</style>