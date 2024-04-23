---
outline: deep
next: false
---

# Radio 单选框

在一组备选项中进行单选

## 基础用法
要使用 `Radio` 组件，只需要设置v-model绑定变量，当变量的值与`label`属性值相同时，相应的`radio`便会被选中。变量可以是`String`、`Number` 或 `Boolean`。`cc-radio`标签中的内容将成为单选框按钮之后的描述
<script setup>
import ccRadio from '../../src/components/radio'
import ccRadioGroup from '../../src/components/radio-group'
import { ref } from 'vue'

const gender = ref(0)
const radio = ref('OptionB')
const age = ref(3)
</script>
<cc-radio v-model="gender" label="0">男</cc-radio>
<cc-radio v-model="gender" label="1">女</cc-radio>

::: details 点击查看代码
```vue
<template>
    <cc-radio v-model="gender" label="0">男</cc-radio>
    <cc-radio v-model="gender" label="1">女</cc-radio>
</template>

<script setup>
import { ref } from 'vue'

const gender = ref(1)
</script>
```
:::

## 禁用状态
通过 `disabled` 属性指定是否禁用 `radio` 组件

<cc-radio disabled v-model="radio" label="OptionA">OptionA</cc-radio>
<cc-radio disabled v-model="radio" label="OptionB">OptionB</cc-radio>

::: details 点击查看代码
```vue
<template>
    <cc-radio disabled v-model="radio" label="OptionA">OptionA</cc-radio>
    <cc-radio disabled v-model="radio" label="OptionB">OptionB</cc-radio>
</template>

<script setup>
import { ref } from 'vue'

const radio = ref('OptionB')
</script>
```
:::

## 单选框组
可以使用`cc-radio-group`组件将多个`cc-radio`组件包裹起来，只需要为`cc-radio-group`使用`v-model`绑定的变量便可以

<cc-radio-group v-model="age">
    <cc-radio label="1">一岁</cc-radio>
    <cc-radio label="2">二岁</cc-radio>
    <cc-radio label="3">三岁</cc-radio>
</cc-radio-group>

::: details 点击查看代码
```vue
<template>
    <cc-radio-group v-model="age">
        <cc-radio label="1">一岁</cc-radio>
        <cc-radio label="2">二岁</cc-radio>
        <cc-radio label="3">三岁</cc-radio>
    </cc-radio-group>
</template>

<script setup>
import { ref } from 'vue'

const age = ref('3')
</script>
```
:::