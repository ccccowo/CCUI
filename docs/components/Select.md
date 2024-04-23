---
outline: deep
next: false
---

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容

## 基础用法
适用广泛的基础单选 `v-model` 的值为当前被选中的 `cc-option` 的 `value` 属性值
<script setup>
import ccSelect from '../../src/components/select'
import ccOption from '../../src/components/select-option'
import { ref } from 'vue'

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
const selectValue = ref('Option2')
</script>

<cc-select v-model="selectValue">
    <cc-option v-for="option in options" :label="option.label" :value="option.value"></cc-option>
</cc-select>


::: details 点击查看代码
```vue
<template>
    <cc-select v-model="selectValue">
        <cc-option v-for="option in options" :label="option.label" :value="option.value"></cc-option>
    </cc-select>
</template>

<script setup>
import { ref } from 'vue'

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
const selectValue = ref('Option2')
</script>
```
:::

## 禁用状态
禁用整个选择器组件

为 cc-select 设置 disabled属性，则整个选择器不可用。
<cc-select v-model="selectValue" disabled>
    <cc-option v-for="option in options" :label="option.label" :value="option.value"></cc-option>
</cc-select>

::: details 点击查看代码
```vue
<template>
    <cc-select v-model="selectValue" disabled>
        <cc-option v-for="option in options" :label="option.label" :value="option.value"></cc-option>
    </cc-select>
</template>

<script setup>
import { ref } from 'vue'

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
const selectValue = ref('Option2')
</script>
```
:::
