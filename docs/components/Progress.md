---
outline: deep
next: false
---

# Progress 进度条

在一组备选项中进行多选

## 基础用法
`Progress` 组件设置 `percentage` 属性即可，表示进度条对应的百分比。 该属性必填，并且必须在 `0-100` 的范围内。可以用`text`来设置文字，`textColor`设置文字颜色，`color`设置进度条颜色

<script setup>
import ccUpload from '../../src/components/upload'
import ccButton from '../../src/components/button'
import ccProgress from '../../src/components/progress'
import { ref } from 'vue'
</script>

<cc-progress :percentage="90" text="90%"></cc-progress>
<br/>
<cc-progress :percentage="100" text="100%" color="green"></cc-progress>
<br/>
<cc-progress :percentage="100" text="Full"></cc-progress>
<br/>
<cc-progress :percentage="20" text="20%" textColor="red" color="red"></cc-progress>
<br/>



::: details 点击查看代码
```vue
<template>
    <cc-progress :percentage="90" text="90%"></cc-progress>
    <br/>
    <cc-progress :percentage="100" text="100%" color="green"></cc-progress>
    <br/>
    <cc-progress :percentage="100" text="Full"></cc-progress>
    <br/>
    <cc-progress :percentage="20" text="20%" textColor="red" color="red"></cc-progress>
    <br/>
</template>
```
:::

## 进度条内显示文字
Progress组件可通过textInside属性来设置文字显示位置
    <cc-progress :percentage="90" text="90%" textInside></cc-progress>
    <br/>
    <cc-progress :percentage="100" text="100%" color="green" textInside></cc-progress>
    <br/>
    <cc-progress :percentage="100" text="Full" textInside></cc-progress>
    <br/>
    <cc-progress :percentage="20" textInside text="20%" textColor="#fff" color="red"></cc-progress>
    <br/>

::: details 点击查看代码
```vue
<template>
    <cc-progress :percentage="90" text="90%" textInside></cc-progress>
    <br/>
    <cc-progress :percentage="100" text="100%" color="green" textInside></cc-progress>
    <br/>
    <cc-progress :percentage="100" text="Full" textInside></cc-progress>
    <br/>
    <cc-progress :percentage="20" textInside text="20%" textColor="#fff" color="red"></cc-progress>
    <br/>
</template>
```
:::
