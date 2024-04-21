import CcProgress from './index.vue';

CcProgress.install = app => {
    app.component(CcProgress.name, CcProgress)
}

export default CcProgress