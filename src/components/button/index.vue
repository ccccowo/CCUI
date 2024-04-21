<!-- button.vue -->
<script>
export default {
    name: "cc-button"
}
</script>
<script setup>
import { ref } from 'vue'
const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    plain: {
        type: Boolean,
        default: false
    },
    round: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'medium',
    },
    loading: {
        type: Boolean,
        default: false
    }
})
// 支持点击事件
const emit = defineEmits(['click'])
const handleClick = () => {
    emit('click')
}
// 实现loading效果
const loading = ref(props.loading)

</script>

<template>
    <button @click="handleClick" class="cc-button" :class="[`cc-button-${props.type}`,
    { 'is-plain': props.plain },
    { 'is-round': props.round },
    { 'is-circle': props.circle },
    { 'is-disabled': props.disabled },
    `cc-button-${props.size}`
    ]">
        <span>
            <slot>
            </slot>
        </span>
    </button>
</template>

<style lang="scss">
// 基本样式
.cc-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 10px;

    &:hover,
    &:hover {
        color: #0856ec;
        border-color: #0856ec;
    }
}

// size
.cc-button-small {
    padding: 10px 15px;
    font-size: 12px;
}

.cc-button-medium {
    padding: 12px 20px;
    font-size: 14px;
}

.cc-button-large {
    padding: 16px 24px;
    font-size: 16px;
}

// circle样式
.cc-button.is-circle.cc-button-small {
    border-radius: 50%;
    padding: 12px;
}

.cc-button.is-circle.cc-button-medium {
    border-radius: 50%;
    padding: 16px;
    padding: 16px;
}

.cc-button.is-circle.cc-button-large {
    border-radius: 50%;
    padding: 20px;
    font-size: 18px;
}

// round样式
.cc-button.is-round {
    border-radius: 30px;
}

// disable
.cc-button.is-disabled {
    cursor: no-drop;
    background: #f5f5f5;
    border-color: #f5f5f5;
    color: #c0c4cc;

}

.cc-button-success.is-disabled {
    cursor: no-drop;
    background-color: #72c8b5;
    border-color: #72c8b5;
    color: #fff;
}

.cc-button-info.is-disabled {
    cursor: no-drop;
    border-color: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;

}

.cc-button-warning.is-disabled {
    cursor: no-drop;
    background-color: #ebb563;
    border-color: #ebb563;
    color: #fff;

}

.cc-button-danger.is-disabled {
    cursor: no-drop;
    border-color: #f78989;
    background-color: #f78989;
    color: #fff;

}

.cc-button-primary.is-disabled {
    cursor: no-drop;
    background-color: #4e84e9;
    border-color: #4e84e9;
    color: #fff;
}

// type样式
.cc-button-primary {
    color: #fff;
    background-color: #0856ec;
    border-color: #0856ec;

    &:hover,
    &:focus {
        background-color: #4e84e9;
        border-color: #4e84e9;
        color: #fff;
    }
}


.cc-button-success {
    color: #fff;
    background-color: #27bb9a;
    border-color: #27bb9a;

    &:hover,
    &:focus {
        background-color: #72c8b5;
        border-color: #72c8b5;
        color: #fff;
    }
}


.cc-button-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,
    &:focus {
        border-color: #a6a9ad;
        background-color: #a6a9ad;
        color: #fff;
    }
}


.cc-button-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
        background-color: #ebb563;
        border-color: #ebb563;
        color: #fff;
    }
}


.cc-button-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
        border-color: #f78989;
        background-color: #f78989;
        color: #fff;
    }
}


// plain样式
.cc-button.is-plain {

    &:hover,
    &:focus {
        background: #fff;
        border-color: #489eff;
        color: #0856ec;
    }
}

.cc-button-primary.is-plain {
    color: #2e80cb;
    background: #d4e4fe;
    border-color: #d4e4fe;

    &:hover,
    &:focus {
        background: #0856ec;
        color: #fff;
    }
}

.cc-button-success.is-plain {
    color: #0f877b;
    background-color: #a1dbce;
    border-color: #c2e7b0;

    &:hover,
    &:focus {
        color: #fff;
        background-color: #27bb9a;
        border-color: #27bb9a;
    }
}

.cc-button-info.is-plain {
    color: #4f5155;
    background: #d3d4d6;
    border-color: #d3d4d6;

    &:hover,
    &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
    }
}

.cc-button-warning.is-plain {
    color: #b17c2d;
    background: #f5dab1;
    border-color: #f5dab1;

    &:hover,
    &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
    }
}

.cc-button-danger.is-plain {
    color: #dd3434;
    background: #fbc4c4;
    border-color: #fbc4c4;

    &:hover,
    &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
    }
}
</style>