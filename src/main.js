import Vue from 'vue'
import App from './App.vue'
import UiVatSun from 'ui-vat-sun'
import 'ui-vat-sun/style/ui-vat-sun.css'
import '../src/fonts/iconfont.css'
// 全局注册人组件
import VatRadio from './components/radio.vue'
Vue.use(UiVatSun)
Vue.component(VatRadio.name, VatRadio)
Vue.config.productionTip = false

// 全局注册组件

Vue.directive('clickOutside', {
  bind (el, bindings, vnode) {
    // 吧事件绑定给document 看一下点击的是否是当前元素的内部
    let handler = (e) => {
      if (el.contains(e.target)) {
        // 防止无限点击 触发事件
        if (!vnode.context.isVisible) {
          vnode.context.focus()
        }
        // 包含的话 当前元素聚焦
      } else {
        if (vnode.context.isVisible) {
          vnode.context.blur()
        }
      }
    }
    el.handler = handler
    document.addEventListener('click', handler)
  },
  unbind (el) {
    document.removeEventListener('click', el.handler)
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
