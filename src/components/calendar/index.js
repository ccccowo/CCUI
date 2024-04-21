import CcCalendar from './index.vue'
CcCalendar.install = app => {
    app.component(CcCalendar.name, CcCalendar)
}
export default CcCalendar