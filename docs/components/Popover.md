---
outline: deep
---

# Popover 气泡卡片



## 基础用法
`trigger` 属性被用来决定 `popover` 的触发方式，支持的触发方式： `hover`、`click`
可以通过`title`和`content`属性来定义文字内容
<script setup>
import ccButton from '../../src/components/button'
import ccPopover from '../../src/components/popover'
import { ref } from 'vue'

</script>
 <cc-popover content="我是hover触发的pop" title="hover" style="margin:20px">
    <cc-button>Hover to active</cc-button>
</cc-popover>

<cc-popover trigger="click" content="我是click触发的pop">
    <cc-button type="primary">Click to active</cc-button>
</cc-popover>


::: details 点击查看代码
```vue
<template>
    <cc-popover content="我是hover触发的pop" title="hover">
        <cc-button>Hover to active</cc-button>
    </cc-popover>

    <cc-popover trigger="click" content="我是click触发的pop">
        <cc-button type="primary">Click to active</cc-button>
    </cc-popover>
</template>
```
:::

## 自定义内容
可以通过具名插槽`content`来自定义内容

<cc-popover title="自定义内容">
    <cc-button>Hover to active</cc-button>
    <template #content>
        <cc-button>我是自定义的按钮！</cc-button>
    </template>
</cc-popover>

::: details 点击查看代码
```vue
<template>
    <cc-popover title="自定义内容">
        <cc-button>Hover to active</cc-button>
        <template #content>
            <cc-button>我是自定义的按钮！</cc-button>
        </template>
    </cc-popover
</template>
```
:::

## 气泡卡片出现位置
可以通过`top` / `top-start` / `top-end` / `bottom` / `bottom-start` / `bottom-end` / `left` / `left-start` / `left-end` / `right` / `right-start` / `right-end`来定义气泡卡片的出现位置

<cc-popover title="Title" content="我是top位置的气泡卡片" direction="top" >
    <cc-button>Top</cc-button>
</cc-popover>
<br/><br/>
<cc-popover title="Title" content="我是top-start位置的气泡卡片" direction="top-start">
    <cc-button>Top-Start</cc-button>
</cc-popover>
<br/><br/>
<cc-popover title="Title" content="我是left位置的气泡卡片" direction="left" >
    <cc-button>Left</cc-button>
</cc-popover>
<br/><br/>
<cc-popover title="Title" content="我是left-start位置的气泡卡片" direction="left-start">
    <cc-button>Left-Start</cc-button>
</cc-popover>

::: details 点击查看代码
```vue
<template>
    <cc-popover title="Title" content="我是top位置的气泡卡片" direction="top" >
        <cc-button>Top</cc-button>
    </cc-popover>

    <br/><br/>

    <cc-popover title="Title" content="我是top-start位置的气泡卡片" direction="top-start">
        <cc-button>Top-Start</cc-button>
    </cc-popover>

    <br/><br/>

    <cc-popover title="Title" content="我是left位置的气泡卡片" direction="left" >
        <cc-button>Left</cc-button>
    </cc-popover>

    <br/><br/>
    
    <cc-popover title="Title" content="我是left-start位置的气泡卡片" direction="left-start">
        <cc-button>Left-Start</cc-button>
    </cc-popover>
</template>
```
:::
