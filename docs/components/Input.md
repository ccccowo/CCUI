---
outline: deep
---

# Input 输入框

通过鼠标或者键盘输入字符

## 基础用法
使用v-model进行数据的双向绑定
<script setup>
import ccInput from '../../src/components/input'
import { ref } from 'vue'

const input = ref('')
</script>
<cc-input v-model="input" placeholder="Please input" style="width: 240px"></cc-input>
<p>{{input}}</p>

::: details 点击查看代码
```vue
<template>
    <cc-input v-model="input" placeholder="Please input" style="width: 240px"></cc-input>
    <p>{{input}}</p>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>
```
:::

## 禁用状态
通过 disabled 属性指定是否禁用 input 组件

<cc-input disabled v-model="input" placeholder="Please input" style="width: 240px"></cc-input>
::: details 点击查看代码
```vue
<template>
    <cc-input 
    disabled 
    v-model="input" 
    placeholder="Please input" 
    style="width: 240px"
    >
    </cc-input>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
</script>
```
:::


