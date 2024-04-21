import CcButton from './button/index.js'
import CcAvatar from './avatar/index.js'
import CcCalendar from './calendar/index.js'
import CcCard from './card/index.js'
import CcCarousel from './carousel/index.js'
import CcCheckbox from './checkbox/index.js'
import CcCheckboxGroup from './checkbox-group/index.js'
import CcDialog from './dialog/index.js'
import CcInput from './input/index.js'
import CcMenu from './menu/index.js'
import CcPopover from './popover/index.js'
import CcProgress from './progress/index.js'
import CcRadio from './radio/index'
import CcRadioGroup from './radio-group/index'
import CcSelect from './select/index'
import CcSelectOption from './select-option/index'
import CcSpace from './space/index'
import CcSwitch from './switch/index.js'
import CcTable from './table/index.js'
import CcUpload from './upload/index.js'    
const install = app =>{
    app.use(CcButton)
    app.use(CcAvatar)
    app.use(CcCalendar)
    app.use(CcCard)
    app.use(CcCarousel)
    app.use(CcCheckbox)
    app.use(CcCheckboxGroup)
    app.use(CcDialog)
    app.use(CcInput)
    app.use(CcMenu)
    app.use(CcPopover)
    app.use(CcProgress)
    app.use(CcRadio)
    app.use(CcRadioGroup)
    app.use(CcSelect)
    app.use(CcSelectOption)
    app.use(CcSpace)
    app.use(CcSwitch)
    app.use(CcTable)
    app.use(CcUpload)
}
const CCUI = {
    install,
} 
export default CCUI
