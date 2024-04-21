import CcMenu from './index.vue';

CcMenu.install = app => {
    app.component(CcMenu.name, CcMenu)
}

export default CcMenu