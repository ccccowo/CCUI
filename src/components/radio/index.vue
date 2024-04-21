<!-- radio.vue -->
<script>
export default {
  name: "cc-radio"
}
</script>
<script setup>
import { inject,watch } from 'vue'
const props = defineProps({
    modelValue: {
        type: String,
    },
    label: {
        type: String,
    },
    disabled:{
        type:Boolean,
        default:false
    }
})
// inject收到cc-radio-group传进来的值和方法
let radioGroup = inject("radio-group")
let radioGroupHandleClick = inject("radio-group-handleClick")
// 点击单选框可以将外面v-model绑定的值换成该单选框的label
const emit = defineEmits(['update:modelValue'])
const handleClick = () => {
    // 判断radio是否被组件包裹
    if (radioGroup == undefined) {
        emit('update:modelValue', props.label)
    }
    else{
        // 调用radio-group的方法
       radioGroupHandleClick(props.label)
    }
}
</script>
<template>
    <label class="cc-radio" 
    :class="[
        { 'is-checked':props.label == (props.modelValue == undefined ? radioGroup : props.modelValue)},
        // {'is-disabled':props.disabled}
        ]">
        <span class="cc-radio-input">
            <span class="cc-radio-inner"></span>
            <input 
            :disabled="props.disabled"
            @click="handleClick"
            :value="props.modelValue == undefined ? radioGroup : props.modelValue" 
            type="radio" 
            class="cc-radio-original"
            >
        </span>
        <span class="cc-radio-label">
            <!-- 如果没有传值，就吧label作为文本显示 -->
            <slot></slot>
            <template v-if="!$slots.default">{{ label }}</template>
        </span>
    </label>
</template>
<style lang="scss" scoped>
.cc-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;

    .cc-radio-input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

        .cc-radio-inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;

            &:after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: #fff;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s ease-in;
            }
        }

        .cc-radio-original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0px;
            right: 0;
            bottom: 0;
            margin: 0;
        }
    }

    .cc-radio-label {
        font-size: 14px;
        padding-left: 10px;
        ;
    }
}

// 选中的样式
.cc-radio.is-checked {
    .cc-radio-input {
        .cc-radio-inner {
            border-color: #0856ec;
            background-color: #0856ec;

            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    .cc-radio-label {
        color:#0856ec;
    }
}

.cc-radio.is-disabled.is-checked{
    cursor:not-allowed;
    .cc-radio-input {
        cursor:not-allowed;
        .cc-radio-inner {
            cursor:not-allowed;
            border-color: #7b8597;
            background-color: #7b8597;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    .cc-radio-label {
        color:silver;
    }
}
.cc-radio.is-disabled{
    cursor:not-allowed;
    .cc-radio-input {
        cursor:not-allowed;
        .cc-radio-inner {
            cursor:not-allowed;
            &:after {
                transform: translate(-50%, -50%) scale(1);
            }
        }
    }

    .cc-radio-label {
        color:silver;
    }
}
</style>