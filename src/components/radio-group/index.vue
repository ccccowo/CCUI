<!-- radio-group.vue -->
<script>
export default {
  name: "cc-radio-group",
}
</script>
<script setup>
// radio-group组件是再radio组件上进行优化的
// 它的目的是在我们使用radio组件时，不必给每个组件都添加一个v-model
// 而是通过绑定一个v-model来实现数据绑定
import { provide,watch,ref } from 'vue'
const props = defineProps({
    // 拿到外界用v-model传进来的值
    modelValue: {
        type: String,
    }
})

// 将v-model的值和更新v-model值的方法传给子组件
const emit = defineEmits(['update:modelValue'])
const handleClick = (label) => {
    emit('update:modelValue', label)
}

// 如果想要子组件用inject接收的值会响应，必须提供一个响应式数据，注意不要加value！
let modelValue2 = ref(props.modelValue)
provide("radio-group", modelValue2)
provide("radio-group-handleClick", handleClick)
// 检测外界传入值得变化，及时更新
watch(()=>props.modelValue,()=>{
    modelValue2.value = props.modelValue
})

</script>
<template>
    <div class="cc-radio-group">
        <slot></slot>
    </div>
</template>   
<style lang="scss" scoped></style>

   