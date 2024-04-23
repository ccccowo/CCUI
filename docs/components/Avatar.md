---
outline: deep
next: false
---

# Avatar 头像

Avatar 组件可以用来代表人物或对象， 支持使用图片或者文字作为 `Avatar`。

## 基础用法
使用 shape 和 size 属性来设置 Avatar 的形状和大小。 
<script setup>
import ccButton from '../../src/components/button'
import ccAvatar from '../../src/components/avatar'
import ccSpace from '../../src/components/space'
import { ref } from 'vue'
</script>
<cc-space size="40px">
    <cc-avatar size="70px" label="user" circle/>
    <cc-avatar size="100px" label="user" circle/>
    <cc-avatar size="70px" label="user" square/>
    <cc-avatar size="100px" label="user" square/>
</cc-space>



::: details 点击查看代码
```vue
<template>
    <cc-space size="40px">
        <cc-avatar size="70px" label="user" />
        <cc-avatar size="100px" label="user" />
        <cc-avatar size="70px" label="user" square/>
        <cc-avatar size="100px" label="user" square/>
    </cc-space>
</template>
```
:::

## 展示类型
支持使用图片或者文字作为Avatar
<cc-space size="40px">
    <cc-avatar size="100px" label="user" />
    <cc-avatar size="100px" 
    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" 
    />
</cc-space>

::: details 点击查看代码
```vue
<template>
    <cc-space size="40px">
        <cc-avatar size="100px" label="user" />
        <cc-avatar size="100px" 
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" 
        />
    </cc-space>
</template>
```
:::
