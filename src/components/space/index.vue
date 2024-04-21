<!-- space.vue -->
<script>
import { useSlots, h, ref, computed } from 'vue'
export default {
    name: 'cc-space',
    props: {
        inline: {
            type: Boolean,
            default: true
        },
        size: {
            type: String,
            default: '10px'
        },
        // 默认不换行
        warp: {
            type: Boolean,
            default: false
        },
        // 默认横着排列
        direction: {
            type: String,
            default: 'horizontal'
        },
        width: {
            type: String,
            default: '600px'
        },
        height: {
            type: String,
            default: 'fit-content'
        }
    },
    setup(props) {
        const $slots = useSlots()
        // 获取到默认插槽下元素
        const slotList = ref([])
        const ccStyle = computed(() => {
            return {
                display: props.inline ? 'inline-flex' : 'flex',
                width: props.width,
                height: props.height,
                'flex-wrap': props.warp ? 'wrap' : 'no-warp',
                'flex-direction': props.direction == 'vertical' ? 'column' : 'inherit',
                gap: props.size
            }
        })
        // 遍历插槽下的每个元素并给它们外面套一层div
        $slots.default().forEach((item, index) => {
            slotList.value.push(
                h(
                    'div',
                    {
                        className: 'cc-space-item',
                        style: 'width: fit-content;'
                    },
                    item
                )
            )
        })
        // 给所有div外层再套一层div
        return () => [
            h(
                'div',
                {
                    className: 'cc-space',
                    style: ccStyle.value
                },
                slotList.value
            )
        ]
    }
}
</script>
<template></template>
<style scoped lang="scss"></style>