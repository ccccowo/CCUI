<!-- card.vue -->
<script>
export default {
    name: "cc-card"
}
</script>
<script setup>
const props = defineProps({
    width: {
        type: String,
    },
    height: {
        type: String,
    },
    lineHidden:{
        type:Boolean,
        default:false
    }
})
</script>
<template>
    <div class="cc-card" :style="{ width: props.width, height: props.height }">
        <!-- 头部 -->
        <div class="cc-card-header">
            <span class="cc-card-title">
                <slot name="title">
                </slot>
            </span>

            <span class="cc-card-headerbtn">
                <slot name="extra"></slot>
            </span>
        </div>
        <p class="line" v-if="!props.lineHidden"></p>
        <!-- 内容 -->
        <div class="cc-card-body">
            <slot></slot>
        </div>
        <p class="line" v-if="!props.lineHidden"></p>
        <!-- 底部 -->
        <div class="cc-card-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.cc-card {
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    width: 35vw;
    height: fit-content;
    display: flex;
    flex-direction: column;

    &-header {
        box-sizing: border-box;
        padding-left: 10px;
        padding-right: 10px;
        height: fit-content;
        line-height: 4vh;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cc-card-title {
        font-size: 18px;
        color: #303133;
    }

    .line {
        height: 1px;
        width: 100%;
        background-color: #ccc;
    }

    &-body {
        box-sizing: border-box;
        padding-left: 10px;
        color: #606266;
        font-size: 16px;
        word-break: break-all;
        flex: 1;
    }

    &-footer {
        line-height: 4vh;
        height: fit-content;
        font-size: 18px;
        box-sizing: border-box;
        padding-left: 10px;
        width: 100%;
    }
}
</style>