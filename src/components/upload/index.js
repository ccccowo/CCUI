import CcUpload from './index.vue';

CcUpload.install = app => {
    app.component(CcUpload.name, CcUpload)
}

export default CcUpload