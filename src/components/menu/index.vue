<!-- menu.vue -->
<template>
    <div class="cc-menu" ref="Ref">
        <div ref="itemRef" class="cc-menu-item" @click="ClickPath(item.path, index)" v-for="(item, index) in props.data"
            :class="{ 'active': activeIndex1 == index }"
            :style="activeIndex1 == index ? activeStyle : { borderRadius: '20px', }">
            {{ item.text }}
        </div>
    </div>
</template>
<script>
export default {
  name: "cc-menu"
}
</script>
<script setup>
import { ref, watch, onMounted } from 'vue'
// import {useRouter} from ''
// const router = useRouter()
const props = defineProps({
    data: {
        type: Array,
        default: () => []
    },
    width: {
        type: String,
        default: '600px'
    },
    height: {
        type: String,
        default: '80px'
    },
    activeIndex: {
        type: Number,
        default: 0
    },
    activeBackgroundColor: {
        type: String,
        default: '#0856ec'
    },
    activeTextColor: {
        type: String,
        default: '#fff'
    },
    textColor: {
        type: String,
        default: 'black'
    },
    menuBackgroundColor: {
        type: String,
        default: '#fff'
    }
})
const Ref = ref(null)
// 激活下标
const activeIndex1 = ref(props.activeIndex)
watch(() => props.activeIndex, () => {
    activeIndex1.value = props.activeIndex
})
// 激活样式
const activeStyle = ref({})
const ClickPath = (path, index) => {
    activeIndex1.value = index
    // router.push(path)
}
const init = () => {
    Ref.value.style.width = props.width
    Ref.value.style.height = props.height
    Ref.value.style.backgroundColor = props.menuBackgroundColor
    Ref.value.style.color = props.textColor
    activeStyle.value = {
    backgroundColor: props.activeBackgroundColor,
    color: props.activeTextColor,
    borderRadius: '20px',
}
}
watch(() => [props.width, props.height, props.menuBackgroundColor, props.textColor].data, () => {
    init()
})
onMounted(() => {
    init()
})
</script>
<style lang="scss" scoped>
.cc-menu {
    min-width: fit-content;
    width: 600px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: deepskyblue;

    .cc-menu-item {
        padding: 10px 25px;
        box-sizing: border-box;
        cursor: pointer;
    }

    // .cc-menu-item.active {
    //     background-color: #0856ec;
    //     color: #fff;
    // }
}
</style>