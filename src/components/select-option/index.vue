<script>
export default {
  name: "cc-select-option"
}
</script>
<script setup>
import {inject,onMounted} from 'vue'
const props = defineProps({
    label: {
        type: String || Number,
        default: ''
    },
    value: {
        type: String || Number,
        default: ''
    },
    key: {
        type: String || Number,
        default: ''
    }
})
const changeSelectValue = inject('changeSelectValue')
// slectValue为一个响应数据，需要用.value才能访问到
const selectValue = inject('selectValue')
const changeOptionValue = ()=>{
    changeSelectValue(props.value,props.label)
}
onMounted(() => {
    if(props.value == selectValue.value) {
        changeSelectValue(props.value,props.label)
    }
})
</script>
<template>
    <div class="cc-option" :key="props.key" @click="changeOptionValue" :class="[{'is-selected':selectValue==props.value}]">
        {{ props.label || props.value || '' }}
    </div>
</template>

<style lang="scss" scoped>
div {
    width: 100%;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 10px;
    padding-left: 20px;
    cursor: pointer;
    font-size: 15px;
}
div.is-selected {
    color: #0856ec;
    font-weight: bold;
    background-color: rgb(240, 240, 240);
}

div:hover {
    box-sizing: border-box;
    background-color: rgb(240, 240, 240);
}
</style>