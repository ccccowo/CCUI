import CcDialog from './index.vue';

CcDialog.install = app => {
    app.component(CcDialog.name, CcDialog)
}

export default CcDialog