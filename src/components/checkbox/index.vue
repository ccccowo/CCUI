<!-- checkbox.vue -->
<script>
export default {
  name: "cc-checkbox"
}
</script>
<script setup>
import { inject, ref, onMounted } from 'vue';
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
let checkboxGroupList = inject('checkbox-group')
let checkboxGroupHandleClick = inject('checkbox-group-handleClick')
const isChecked = ref(false)
console.log(checkboxGroupList)

// 使用checkbox-group情况下根据v-model数组渲染多选框选中情况
const getChecked = () => {
    // 遍历数组，如果数组中有值与此checkbox的value值相同，则选中
    if (checkboxGroupList != undefined) {
        for (let i = 0; i < checkboxGroupList.length; i++) {
            console.log(props.value)
            if (checkboxGroupList[i] === props.value) {
                isChecked.value = true
                console.log(isChecked.value)
            }
        }
    }
}
getChecked()


// 改变多选框状态
const emit = defineEmits(['update:modelValue'])
const handleClick = () => {
    if (checkboxGroupList != undefined) {
        // 如果按钮为禁用状态则直接返回
        if(props.disabled == true) {
            return
        }
        // 如果数组中有这个值就删掉，没有就加上
        if(checkboxGroupList.includes(props.value)) {
            checkboxGroupList.splice(checkboxGroupList.indexOf(props.value), 1)
            isChecked.value = false
        }else{
            checkboxGroupList.push(props.value)
            isChecked.value = true
        }
        checkboxGroupHandleClick(checkboxGroupList)
    }
    else {
        emit('update:modelValue', !props.modelValue)
    }
}
</script>
<template>
    <label class="cc-checkbox"
        :class="[{ 'is-checked': (props.modelValue == false ? isChecked : props.modelValue) }, { 'is-disabled': props.disabled }]">
        <span class="cc-checkbox-input">
            <span class="cc-checkbox-inner"></span>
            <input type="checkbox" class="cc-checkbox-original" @click="handleClick">
        </span>
        <span class="cc-checkbox-label">
            <slot></slot>
            <template v-if="!$slots.default">
                {{ label }}
            </template>
        </span>
    </label>
</template>

   
<style lang="scss" scoped>
.cc-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;

    .cc-checkbox-input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;

        .cc-checkbox-inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background-color: #fff;
            z-index: 1;
            transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s, cubic-bezier(.71, -.46, .29, 1.46);

            &:after {
                box-sizing: content-box;
                content: '';
                border: 1px solid #ffffff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                top: 1px;
                transform: rotate(45deg) scaleY(0);
                width: 3px;
                transition: transform .15s ease-in .05s;
                transform-origin: center;
            }
        }

        .cc-checkbox-original {
            opacity: 0;
            outline: none;
            position: absolute;
            left: 10px;
            margin: 0;
            width: 0;
            height: 0;
            z-index: -1;
        }
    }

    .cc-checkbox-label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
}

// 选中的样式
.cc-checkbox.is-checked {
    .cc-checkbox-input {
        .cc-checkbox-inner {
            background-color: #409eff;
            border-color: #409eff;
        }

        &:after {
            transform: rotate(45deg) scaleY(1);
        }
    }

    .cc-checkbox-label {
        color: #409eff;
    }
}

// 禁用的样式
.cc-checkbox.is-disabled {
    .cc-checkbox-input {
        .cc-checkbox-inner {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &:after {
            transform: rotate(45deg) scaleY(1);
        }
    }

    .cc-checkbox-label {
        color: #c0c4cc;
        cursor: not-allowed;
    }
}
</style>