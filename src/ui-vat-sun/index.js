import vatDatePicker from '../components/date-picker'
import vatButton from '../components/button'
import VatDialog from '../components/dialog'
import VatSwitch from '../components/switch'
import VatInput from '../components/input'
import VatRadio from '../components/radio'
import VatRadioGroup from '../components/radio-group'

const install = (Vue) => {
  Vue.component(vatDatePicker.name, vatDatePicker),
    Vue.component(VatDialog.name, VatDialog),
    Vue.component(vatButton.name, vatButton),
    Vue.component(VatSwitch.name, VatSwitch),
    Vue.component(VatInput.name, VatInput),
    Vue.component(VatRadio.name, VatRadio),
    Vue.component(VatRadioGroup.name, VatRadioGroup)
}

export default {
  install
}