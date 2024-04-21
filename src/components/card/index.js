import CcCard from './index.vue'
CcCard.install = app => {
    app.component(CcCard.name, CcCard)
}
export default CcCard