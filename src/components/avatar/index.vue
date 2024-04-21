<!-- avatar.vue -->
<template>
    <span class="cc-avatar">
        <img v-if="props.label == '' && props.src != ''" :src=props.src :alt=props.alt ref="avatarRef">
        <span class="wenzi" v-if="props.src == ''" ref="wenziRef">
            {{ props.label }}
        </span>
    </span>
</template>
<script>
export default {
    name: "cc-avatar"
}
</script>
<script setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
    size: {
        type: String,
        default: '40px'
    },
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    square: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    }
})
const avatarRef = ref(null)
const wenziRef = ref(null)
const init = () => {
    if (props.label == '' && props.src == '') {
        wenziRef.value.style.width = props.size
        wenziRef.value.style.height = props.size
        wenziRef.value.style.lineHeight = props.size
        if (props.square) {
            wenziRef.value.style.borderRadius = '5px'
        }
    }
    else if (props.label == '') {
        avatarRef.value.style.width = props.size
        avatarRef.value.style.height = props.size
        if (props.square) {
            avatarRef.value.style.borderRadius = '5px'
        }
    }
    else if (props.label != '') {
        wenziRef.value.style.width = props.size
        wenziRef.value.style.height = props.size
        wenziRef.value.style.lineHeight = props.size
        if (props.size <= 40) {
            wenziRef.value.style.fontSize = '15px'
        }
        if (props.square) {
            wenziRef.value.style.borderRadius = '5px'
        }
    }
}
onMounted(() => {
    init()
})
watch(() => props, () => {
    init()
}, {
    deep: true
})
</script>
<style lang="scss" scoped>
.cc-avatar {
    img {
        box-sizing: border-box;
        border-radius: 50%;
        background-color: rgb(225, 225, 225);
    }

    span {
        width: 100px;
        height: 100px;
        line-height: 100px;
        display: inline-block;
        box-sizing: border-box;
        border-radius: 50%;
        background-color: rgb(225, 225, 225);
        text-align: center;
    }
}
</style>