import ccButton from './button/index.js'
import ccAvatar from './avatar/index.js'
import ccCalendar from './calendar/index.js'
import ccCard from './card/index.js'
import ccCarousel from './carousel/index.js'
import ccCheckbox from './checkbox/index.js'
import ccCheckboxGroup from './checkbox-group/index.js'
import ccDialog from './dialog/index.js'
import ccInput from './input/index.js'
import ccMenu from './menu/index.js'
import ccPopover from './popover/index.js'
import ccProgress from './progress/index.js'
import ccRadio from './radio/index'
import ccRadioGroup from './radio-group/index'
import ccSelect from './select/index'
import ccSelectOption from './select-option/index'
import ccSpace from './space/index'
import ccSwitch from './switch/index.js'
import ccTable from './table/index.js'
import ccUpload from './upload/index.js'
const install = app => {
    app.use(ccButton)
    app.use(ccAvatar)
    app.use(ccCalendar)
    app.use(ccCard)
    app.use(ccCarousel)
    app.use(ccCheckbox)
    app.use(ccCheckboxGroup)
    app.use(ccDialog)
    app.use(ccInput)
    app.use(ccMenu)
    app.use(ccPopover)
    app.use(ccProgress)
    app.use(ccRadio)
    app.use(ccRadioGroup)
    app.use(ccSelect)
    app.use(ccSelectOption)
    app.use(ccSpace)
    app.use(ccSwitch)
    app.use(ccTable)
    app.use(ccUpload)
}
const CCUI = {
    install,
}
export {
    ccButton, ccAvatar, ccCalendar, ccCard, ccCarousel, ccCheckbox,
    ccCheckboxGroup, ccDialog, ccInput, ccMenu, ccPopover, ccProgress,
    ccRadio, ccRadioGroup, ccSelect, ccSelectOption, ccSpace, ccSwitch,
    ccTable, ccUpload
}
export default CCUI
