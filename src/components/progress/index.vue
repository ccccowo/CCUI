<!-- progress.vue -->
<template>
    <div class="cc-progress" ref="Ref">
        <div class="content" ref="progressRef">
            <div ref="wenziRef" class="wenzi" v-show="textInside">{{ props.text }}</div>
        </div>
        <div ref="endRef" class="end" v-show="!textInside">{{ props.text }}</div>
    </div>
</template>
<script>
export default {
  name: "cc-progress"
}
</script>
<script setup>
import { ref, onMounted, watch } from 'vue'
const props = defineProps({
    percentage: {
        type: Number,
        default: 0
    },
    color: {
        type: String,
        default: '#0856ec'
    },
    textInside: {
        type: Boolean,
        default: false
    },
    text: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
    },
    width: {
        type: String,
        default: '400px'
    },
    height: {
        type: String,
        default: '20px'
    }
})
const Ref = ref(null)
const progressRef = ref(null)
const wenziRef = ref(null)
const endRef = ref(null)
const init = () => {
    Ref.value.style.width = props.width + 'px'
    Ref.value.style.height = props.height + 'px'
    Ref.value.style.borderRadius = props.height + 'px'

    const dom = progressRef.value
    dom.style.width = props.percentage + '%'
    dom.style.backgroundColor = props.color
    dom.style.height = props.height + 'px'
    dom.style.borderRadius = props.height + 'px'
    console.log(props.textInside)
    const flag = props.textInside
    if (flag == true) {
        let dom1 = wenziRef.value
        dom1.style.color = props.textColor || '#fff'
        dom1.style.lineHeight = props.height + 'px'
    }
    else {
        let dom1 = endRef.value
        dom1.style.color = props.textColor || 'black'
        endRef.value.style.lineHeight = props.height + 'px'

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
.cc-progress {
    position: relative;
    width: 400px;
    height: 20px;
    background-color: silver;
    border-radius: 10px;

    .content {
        height: 20px;
        width: 200px;
        border-radius: 10px;
        position: relative;
        background-color: red;

        .wenzi {
            font-size: 13px;
            font-weight: bold;
            position: absolute;
            right: 10px;
        }
    }

    .end {
        font-size: 13px;
        font-weight: bold;
        position: absolute;
        top: 0;
        right: -30px;
    }
}
</style>