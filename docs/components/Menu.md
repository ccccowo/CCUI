---
outline: deep
next: false
---

# Menu 菜单

为网站提供导航功能

## 顶栏菜单
顶部栏菜单可以在各种场景中使用。

使用`data`属性来为菜单传入所需的`path`与文字
  `Menu` 还提供了`menuBackgroundColor`、`textColor`、`activeTextColor`和`activeBackgroundColor`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的背景色、文字颜色。

还可以使用`width`和`height`属性来自定义菜单宽高
<script setup>
import ccMenu from '../../src/components/menu'
import { ref } from 'vue'

const menu = ref([
    { path: '/home', text: '首页' },
    { path: '/about', text: "关于我们" },
    { path: '/users', text: '我的' }
])
</script>
<cc-menu :data="menu" ></cc-menu>
<br/>
<cc-menu 
width="400px"
height="60px"
:data="menu" 
textColor="pink" 
menuBackgroundColor="black" 
activeTextColor="black"
activeBackgroundColor="pink"
>
</cc-menu>


::: details 点击查看代码
```vue
<template>
    <cc-menu :data="menu" ></cc-menu>
    <br/>
    <cc-menu 
    :data="menu" 
    textColor="pink" 
    menuBackgroundColor="black" 
    activeTextColor="black"
    activeBackgroundColor="pink"
    >
    </cc-menu>
</template>

<script setup>
import { ref } from 'vue'

const menu = ref([
    { path: '/home', text: '首页' },
    { path: '/about', text: "关于我们" },
    { path: '/users', text: '我的' }
])
</script>
```
:::

## 侧栏菜单
导航菜单默认为水平模式，通过将 `mode` 属性设置为 `vertical` 来使导航菜单变更为垂直模式。


::: details 点击查看代码
```vue
<template>

</template>

<script setup>
import { ref } from 'vue'

</script>
```
:::


## 自定选中菜单项
属性`activeIndex`用来自定义选中菜单项
<cc-menu :data="menu" activeIndex="1"></cc-menu>


::: details 点击查看代码
```vue
<template>
    <cc-menu :data="menu" activeIndex="1"></cc-menu>    
</template>

<script setup>
import { ref } from 'vue'

const menu = ref([
    { path: '/home', text: '首页' },
    { path: '/about', text: "关于我们" },
    { path: '/users', text: '我的' }
])
</script>
```
:::
