<script setup>
const props = defineProps({
    modelValue: {
        type: Number
    }
})
const emit = defineEmits(['update:modelValue'])
const addNumber = () => {
    emit('update:modelValue', props.modelValue + 1)
}
const decreaseNumber = () => {
    emit('update:modelValue', props.modelValue - 1)
}
</script>
<template>
    <div class="cc-input-number">
        <button @click="decreaseNumber">减 1</button>
        <span style="color: red;padding: 6px">{{ props.modelValue }}</span>
        <button @click="addNumber">加 1</button>
    </div>
</template>
<style>
</style>
