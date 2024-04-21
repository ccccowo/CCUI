<!-- 外界传入modelView -->
<script>
export default {
  name: "cc-select"
}
</script>
<script setup>
import { ref, provide,watch } from 'vue'
const positionShow = ref(false)
const vClickOutside = {
    beforeMount(el) {
        document.addEventListener('click', (e) => {
            // 如果点击的区域包含在被绑定的元素区域中，则positon显现
            if (el.contains(e.target)){
                positionShow.value = true
                isBorder.value = true
            }
            else{
                positionShow.value = false
                isBorder.value = false
                isEmpty.value = false
            }
        })
    },
}
const props = defineProps({
    options: {
        type: Array,
        default: []
    },
    modelValue: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
const selectLabel = ref('Select')
const isEmpty = ref(true)
const isBorder = ref(false)
// option调用方法更改父组件状态
const emit = defineEmits(['update:modelValue'])
const changeSelectValue = (value, label) => {
    emit('update:modelValue', value)
    if (props.disabled == true) return
    selectLabel.value = label || value || ''
    isEmpty.value = false
}
// 传递响应式数据
const modelValue2 = ref(props.modelValue)
watch(()=>props.modelValue,()=>{
    modelValue2.value = props.modelValue
})
provide('selectValue', modelValue2)
provide('changeSelectValue', changeSelectValue)
</script>
<template>
    <div class="cc-select" v-clickOutside>
        <input type="text"  :disabled="props.disabled" :value="selectLabel" readonly :style="{
            'color': isEmpty == false ? 'black' : 'silver'
        }"
        :class="[{'border':isBorder}]"
        >

        <transition name="slide-fade">
            <div class="cc-position-box" v-show="positionShow">
                <slot></slot>

            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.cc-select {
    min-width: 200px;
    box-sizing: border-box;
    display: inline-block;
    height: 40px;
    position: relative;

    input {
        border-radius: 5px;
        box-sizing: border-box;
        border: 1px solid silver;
        padding: 8px 10px;
        outline: none;
        width: 100%;
        font-size: 16px;
    }
    input.border{
    border: 1px solid #0856ec;
}

    .cc-position-box {
        box-sizing: border-box;
        width: 100%;
        height: auto;
        overflow: hidden;
        z-index: 9999;
        position: absolute;
        top: 48px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);
    }
}

// 动画效果
.slide-fade-enter-active {
  transition: all 0.15s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>

