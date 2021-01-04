<template>
  <transition name="dialog-fade">
    <!-- 遮罩层 -->
    <div class="vat-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div
        class="vat-dialog"
        :style="{
          width,
          marginTop: top,
        }"
      >
        <!-- 头部 -->
        <div class="vat-dialog_header">
          <slot name="title">
            <span class="vat-dialog_title">{{ title }}</span>
          </slot>
          <button class="vat-dialog_headerbtn" @click="handleClose">
            <i class="vat-icon-close"></i>
          </button>
        </div>
        <!-- 内容 -->
        <div class="vat-dialog_body">
          <slot></slot>
        </div>
        <!-- 底部 -->
        <div class="vat-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script> 
export default {
  name: 'vat-dialog',
  props: {
    title: {
      type: String,
      default: () => {
        return '提示'
      }
    }, top: {
      type: String,
      default: () => {
        return '20vh'
      }
    }, width: {
      type: String,
      default: () => {
        return '40%'
      }
    }, visible: {
      type: Boolean,
      default: () => {
        return false
      }
    }, isDirectClose: {
      type: Boolean,
      default: () => {
        return true
      }
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.vat-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .vat-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &_header {
      padding: 20px 20px 10px;

      .vat-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }

      .vat-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;

        .vat-icon-close {
          color: 909399;
        }
      }
    }

    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;

      ::v-deep .vat-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-fade-enter-active {
  animation: fade 1s;
}

.dialog-fade-leave-active {
  animation: fade 1s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>