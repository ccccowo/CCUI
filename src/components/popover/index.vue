<!-- popover -->
<script>
export default {
  name: "cc-popover",
}
</script>
<script setup>
import { ref, watch, onMounted, nextTick } from "vue"
const props = defineProps({
    direction: {
        type: String,
        default: 'bottom'
    },
    title: {
        type: String,
        default: 'Title'
    },
    content: {
        type: String,
        default: ''
    },
    trigger: {
        type: String,
        default: 'hover'
    },
    width:{
        type: String,
        default: '250px'
    }
})
const visible = ref(false)
const buttonRef = ref(null)
const buttonHeight = ref(0)
const buttonWidth = ref(0)
const popRef = ref(null)
const popHeight = ref(0)
const popWidth = ref(0)
// 设置定位
const positionContent = () => {
    buttonHeight.value = buttonRef.value.clientHeight
    buttonWidth.value = buttonRef.value.clientWidth
    popHeight.value = popRef.value.clientHeight
    popWidth.value = popRef.value.clientWidth
    if (props.direction == 'bottom') {
        popRef.value.style.top = (buttonHeight.value + 10) + 'px'
        popRef.value.style.left = -((popWidth.value - buttonWidth.value) / 2) + 'px'
    }
    else if (props.direction == 'bottom-start') {
        popRef.value.style.top = (buttonHeight.value + 10) + 'px'
    }
    else if (props.direction == 'top') {
        popRef.value.style.bottom = (buttonHeight.value + 10) + 'px'
        popRef.value.style.left = -((popWidth.value - buttonWidth.value) / 2) + 'px'
    }
    else if (props.direction == 'top-start') {
        popRef.value.style.bottom = (buttonHeight.value + 10) + 'px'
    }
    else if (props.direction == 'left') {
        popRef.value.style.right = (buttonWidth.value + 10) + 'px'
        popRef.value.style.top = -((popHeight.value - buttonHeight.value) / 2) + 'px'
    }
    else if (props.direction == 'left-start') {
        popRef.value.style.right = (buttonWidth.value + 10) + 'px'
    }
    else if (props.direction == 'right') {
        popRef.value.style.left = (buttonWidth.value + 10) + 'px'
        popRef.value.style.top = -((popHeight.value - buttonHeight.value) / 2) + 'px'
    }
    else if (props.direction == 'right-start') {
        popRef.value.style.left = (buttonWidth.value + 10) + 'px'
    }
}
// 点击方法
const thisonClick = () => {
    if (props.trigger === "click") {
        if (visible.value === true) {
            closepop()
        } else {
            showpop()
        }
    }
}
// 显示
const showpop = () => {
    visible.value = true
    nextTick(() => {
        positionContent()
    })
}
// 隐藏
const closepop = () => {
    visible.value = false
}
const initTrigger = () => {

    if (props.trigger == 'click') {
        buttonRef.value.addEventListener('click', thisonClick)
    }
    else if (props.trigger == 'hover') {
        buttonRef.value.addEventListener('mouseenter', showpop)
        buttonRef.value.addEventListener('mouseleave', closepop)
        popRef.value.addEventListener('mouseenter', showpop)
        popRef.value.addEventListener('mouseleave', closepop)
    }
}
watch(() => [props.trigger,props.width], () => {
    initTrigger()
})
watch(()=>props.width, () => {
    popRef.value.style.width = props.width
})
watch(()=>props.direction, () => {
    positionContent()
})

onMounted(() => {
    initTrigger()
    popRef.value.style.width = props.width
})
</script>
<template>
    <div class="box">
        <Transition name="fade">
            <div class="cc-popover" v-show="visible" ref="popRef">
                <div class="cc-popover-title">{{ title }}</div>
                <div class="cc-popover-content">
                    {{ content }}
                    <slot name="content"></slot>
                </div>
            </div>
        </Transition>

        <span class="cc-popover-button" ref="buttonRef">
            <slot></slot>
        </span>
    </div>
</template>
<style lang="scss">
.box {
    display: inline-block;
    position: relative;
    height: fit-content;
    width: fit-content;
}

.cc-popover {
    width: 250px;
    min-height: 80px;
    position: absolute;
    z-index: 1000;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
    padding: 10px;
    font-size: 15px;
    line-height: 1.5;
    color: #606266;
    word-wrap: normal;

    .cc-popover-title {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
    }

}

.cc-popover-button {
    display: inline-block;
    width: fit-content;
    height: fit-content;
}
// 动画效果
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>