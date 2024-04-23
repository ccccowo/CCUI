---
outline: deep
next: false
---

# Switch 开关

用于两种对立状态间的切换

## 基础用法
绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用`active-color`属性与 `inactive-color` 属性来设置开关的背景色。
<script setup>
import ccSpace from '../../src/components/space'
import ccSwitch from '../../src/components/switch'
import { ref } from 'vue'

const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
</script>

  <cc-switch v-model="value1" />
  <cc-switch
    v-model="value2"
    active-color="green" 
    inactive-color="red"
  />


::: details 点击查看代码
```vue
<template>
  <cc-switch v-model="value1" />
  <cc-switch
    v-model="value2"
    active-color="green" 
    inactive-color="red"
  />
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
</script>
```
:::

## 调整尺寸
除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`、`middle`和`small`三种值，默认为`middle`。

<cc-switch v-model="value3" size="large"/>
<br />
<cc-switch v-model="value3"/>
<br />
<cc-switch v-model="value3" size="small" />



::: details 点击查看代码
```vue
<template>
    <cc-switch v-model="value3" size="large"/>
    <br />
    <cc-switch v-model="value3"/>
    <br />
    <cc-switch v-model="value3" size="small"/>
</template>

<script setup>
import { ref } from 'vue'

const value3 = ref(true)
</script>
```
:::





