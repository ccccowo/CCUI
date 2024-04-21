import CcTable from './index.vue';

CcTable.install = app => {
    app.component(CcTable.name, CcTable)
}

export default CcTable