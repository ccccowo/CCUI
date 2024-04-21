<!-- checkbox-group.vue -->
<script>
export default {
  name: "cc-checkbox-group"
}
</script>
<script setup>
import {ref,provide,watch} from 'vue'
const props = defineProps({
    modelValue:{
        type:Array,
        default:()=>[]
    }
})

// 更新用户定义的数组变量
const emit = defineEmits(['update:modelValue'])
const handleClick = (valueList) => {
    emit('update:modelValue',valueList)
}

let arr = [].concat(props.modelValue)
const modelValue2 = ref(arr)
provide('checkbox-group',modelValue2.value)
provide('checkbox-group-handleClick',handleClick)
// 检测外界传入值得变化，及时更新
watch(()=>props.modelValue,()=>{
    arr = [].concat(props.modelValue)
})
</script>

<template>
    <div class="cc-checkbox-group">
        <slot></slot>
    </div>
</template>
