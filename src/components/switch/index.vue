<!-- switch.vue -->
<script>
export default {
  name: "cc-switch"
}
</script>
<script setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'medium'
    },
    activeColor: {
        type: String,

    },
    inactiveColor: {
        type: String,
    }
})
const core = ref()
// 初始渲染时候修改开关颜色
onMounted(() => {
    if (props.activeColor || props.inactiveColor) {
        const color = props.modelValue ? props.activeColor : props.inactiveColor
        core.value.style.backgroundColor = color
        core.value.style.borderColor = color
    }
})
// 当父组件传入的颜色以及状态发生改变后，修改颜色
watch(() => [props.activeColor, props.inactiveColor,props.modelValue], () => {
    if (props.activeColor || props.inactiveColor) {
        const color = props.modelValue ? props.activeColor : props.inactiveColor
        core.value.style.backgroundColor = color
        core.value.style.borderColor = color
    }
})
const emit = defineEmits(['update:modelValue'])
const handleSwitch = () => {
    emit('update:modelValue', !props.modelValue)
}
</script>
<template>
    <span class="cc-switch" @click="handleSwitch" :class="[{ 'is-checked': props.modelValue }, `cc-switch-${props.size}`]">
        <span class="cc-switch-core" ref="core">
            <span class="cc-switch-button"></span>
        </span>
    </span>
</template>
<style lang="scss" scoped>
.cc-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;

    .cc-switch-core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s, background-color .3s;
        vertical-align: middle;

        .cc-switch-button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}

//   选中样式
.is-checked {
    .cc-switch-core {
        border-color: #0856ec;
        background-color: #0856ec;

        .cc-switch-button {
            transform: translateX(20px);
        }
    }
}

.is-checked.cc-switch-small {
    .cc-switch-core {
        border-color: #0856ec;
        background-color: #0856ec;

        .cc-switch-button {
            transform: translateX(14px);
        }
    }
}

.is-checked.cc-switch-large {
    .cc-switch-core {
        border-color: #0856ec;
        background-color: #0856ec;

        .cc-switch-button {
            transform: translateX(26px);
        }
    }
}

// size
.cc-switch-small.cc-switch {
    font-size: 14px;
    line-height: 20px;

    .cc-switch-core {
        width: 30px;
        height: 15px;

        .cc-switch-button {
            top: 1px;
            left: 1px;
            width: 12px;
            height: 12px;
        }
    }
}

.cc-switch-large.cc-switch {
    line-height: 25px;

    .cc-switch-core {
        width: 50px;
        height: 25px;
        border-radius: 20px;

        .cc-switch-button {
            top: 1px;
            left: 1px;
            width: 20px;
            height: 20px;
        }
    }
}
</style>
 