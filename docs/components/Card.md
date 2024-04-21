---
outline: deep
---

# Card 卡片

将信息聚合在卡片容器中展示

## 基础用法
卡片包含标题，内容以及操作区域。

`Card` 组件由 `title` `extra` `body` 和 `footer`组成。 `title` `extra` 和 `footer`是可选的，其内容取决于一个具名的 `slot`。
<script setup>
import ccButton from '../../src/components/button'
import ccCard from '../../src/components/card'
import { ref } from 'vue'
</script>
<cc-card>
    <template #title>
        我是title
    </template>
    <template #extra>
        <cc-button type="primary">我是extra</cc-button>
    </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    <template #footer>Footer content</template>
</cc-card>



::: details 点击查看代码
```vue
<template>
    <cc-card>
        <template #title>
            我是title
        </template>
        <template #extra>
            <cc-button type="primary">我是extra</cc-button>
        </template>
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
        <template #footer>Footer content</template>
    </cc-card>
</template>

```
:::

## 简单卡片
卡片可以只有内容区域，只需要使用`lineHidden`属性隐藏掉分割线
<cc-card lineHidden>
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
</cc-card>

::: details 点击查看代码
```vue
<template>
    <cc-card lineHidden>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    </cc-card>
</template>
```
:::


## 自定义卡片宽度和高度

可以使用`width`和`height`来定义卡片宽度和高度，若不传入`height`卡片大小默认被内容撑开

<cc-card width="300px" height="300px">
    <template #title>
        我是title
    </template>
    <template #extra>
        <cc-button type="primary">我是extra</cc-button>
    </template>
    List item
    <template #footer>Footer content</template>
</cc-card>


::: details 点击查看代码
```vue
<template>
    <cc-card width="300px" height="300px">
        <template #title>
            我是title
        </template>
        <template #extra>
            <cc-button type="primary">我是extra</cc-button>
        </template>
        List item
        <template #footer>Footer content</template>
    </cc-card>
</template>
```
:::

## 带有阴影效果的卡片

你可以定义什么时候展示卡片的阴影效果。

通过 `shadow` 属性设置卡片阴影出现的时机。 该属性的值可以是：`always`、`hover` 或 `never`。

<cc-card lineHidden>
    Always
</cc-card>
<br/>
<cc-card lineHidden>
    Hover
</cc-card>
<br/>
<cc-card lineHidden>
    Never
</cc-card>


::: details 点击查看代码
```vue
<template>
    <cc-card lineHidden shadow="always">
        Always
    </cc-card>
    <br/>
    <cc-card lineHidden shadow="hover">
        Hover
    </cc-card>
    <br/>
    <cc-card lineHidden shadow="never">
        Never
    </cc-card>
</template>
```
:::



