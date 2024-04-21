<!-- dialog.vue -->
<script>
export default {
  name: "cc-dialog",
}
</script>
<script setup>
import { watch, ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
    },
    top: {
        type: String,
    },
    width: {
        type: String,
    },
    height: {
        type: String,
    },
    visible: {
        type: Boolean,
        default: false,
    },
    hidden: {
        type: Boolean,
        default: false,
    }
})
const visible = ref(props.visible)
const emit = defineEmits(['update:visible'])
// 弹窗关闭方法，注意这个方法现在在 setup 函数内部  
const handleClose = () => {
    console.log("close")
    emit('update:visible', false)
}

// 监听传入的props.visible的变化
watch(() => props.visible, (newVal) => {
    visible.value = newVal;
})
</script>
<template>
    <transition name="dialog-fade">
        <div class="cc-dialog-wrapper" v-show="visible" @click.self="handleClose">
            <div class="cc-dialog" :style="{ width: props.width, marginTop: top }">
                <!-- 头部 -->
                <div class="cc-dialog-header">
                    <slot name="title">
                        <span class="cc-dialog-title">
                            {{ title }}
                        </span>
                    </slot>
                    <span v-if="!props.hidden" @click="handleClose" class="cc-dialog-headerbtn">x</span>
                </div>
                <!-- 内容 -->
                <div class="cc-dialog-body">
                    <slot></slot>
                </div>
                <!-- 底部 -->
                <div class="cc-dialog-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>

    </transition>
</template>
<style lang="scss" scoped>
// 动画

.dialog-fade-enter-active {
    animation: fade .3s;
}

.dialog-fade-leave-active {
    animation: fade .3s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.cc-dialog-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.4);

    .cc-dialog {
        box-sizing: border-box;
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 25%;

        &-header {
            box-sizing: border-box;
            padding: 20px;
            height: 5vh;

            .cc-dialog-title {
                font-size: 18px;
                color: #303133;
            }

            .cc-dialog-headerbtn {
                position: absolute;
                top: 6px;
                right: 20px;
                font-size: 22px;
                cursor: pointer;

                &:hover {
                    color: dodgerblue;
                }
            }
        }

        &-body {
            box-sizing: border-box;
            // background-color: pink;
            padding: 15px 20px;
            color: #606266;
            font-size: 16px;
            word-break: break-all;
        }

        &-footer {
            box-sizing: border-box;
            padding: 10px;
            width: 100%;
            text-align: right;

            ::v-deep .cc-button:first-child {
                margin-right: 20px;
            }
        }
    }
}</style>