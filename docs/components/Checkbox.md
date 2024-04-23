---
outline: deep
next: false
---

# CheckBox 多选框

在一组备选项中进行多选

## 基础用法
当`checkbox`元素单独使用时，`v-model`绑定的变量应该为`Boolean`类型，选中时值为`true`。`cc-checkbox`标签中的内容将成为多选框按钮之后的描述

<script setup>
import ccCheckbox from '../../src/components/checkbox'
import ccCheckboxGroup from '../../src/components/checkbox-group'
import { ref } from 'vue'

const checkbox1 = ref(true)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
const checkbox4 = ref(false)
const checkbox5 = ref(true)
const checkboxList1 = ref(['A', 'C'])
</script>
<cc-checkbox v-model="checkbox1">Option1</cc-checkbox>
<cc-checkbox v-model="checkbox2">Option2</cc-checkbox>
<cc-checkbox v-model="checkbox3">Option3</cc-checkbox>

::: details 点击查看代码
```vue
<template>
    <cc-checkbox v-model="checkbox1">Option1</cc-checkbox>
    <cc-checkbox v-model="checkbox2">Option2</cc-checkbox>
    <cc-checkbox v-model="checkbox3">Option3</cc-checkbox>
</template>

<script setup>
import { ref } from 'vue'

const checkbox1 = ref(true)
const checkbox2 = ref(false)
const checkbox3 = ref(false)
</script>
```
:::

## 禁用状态
通过 `disabled` 属性指定是否禁用 `checkbox` 组件
<cc-checkbox v-model="checkbox4" disabled>Option1</cc-checkbox>
<cc-checkbox v-model="checkbox5">Option2</cc-checkbox>

::: details 点击查看代码
```vue
<template>
    <cc-checkbox v-model="checkbox1" disabled>Option1</cc-checkbox>
    <cc-checkbox v-model="checkbox2">Option2</cc-checkbox>
</template>

<script setup>
import { ref } from 'vue'

const checkbox1 = ref(false)
const checkbox2 = ref(true)
</script>
```
:::

## 多选框组
可以使用`cc-checkbox-group`组件将多个`cc-checkbox`组件包裹起来，只需要为`cc-checkbox-group`使用`v-model`绑定的变量便可以,变量类型应该为`Array`,这个变量是选择框的值
单个`cc-checkbox`的值由`label`属性绑定

<cc-checkbox-group v-model="checkboxList1">
    <cc-checkbox value="A" lable="AAA">OptionA</cc-checkbox>
    <cc-checkbox value="B" label="BBB">OptionB</cc-checkbox>
    <cc-checkbox value="C" label="CCC">OptionC</cc-checkbox>
    <cc-checkbox value="D" label="DDD" disabled>OptionC</cc-checkbox>
</cc-checkbox-group>

::: details 点击查看代码
```vue
<template>
    <cc-checkbox-group v-model="checkboxList1">
        <cc-checkbox value="A" lable="AAA">OptionA</cc-checkbox>
        <cc-checkbox value="B" label="BBB">OptionB</cc-checkbox>
        <cc-checkbox value="C" label="CCC">OptionC</cc-checkbox>
        <cc-checkbox value="D" label="DDD" disabled>OptionC</cc-checkbox>
    </cc-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'

const checkboxList1 = ref(['A', 'C'])
</script>
```
:::