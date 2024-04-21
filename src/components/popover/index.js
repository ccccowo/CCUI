import CcPopover from './index.vue';

CcPopover.install = app => {
    app.component(CcPopover.name, CcPopover)
}

export default CcPopover