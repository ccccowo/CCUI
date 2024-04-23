---
outline: deep
next: false
---

# Space 间距

给组件之间提供统一的间距

## 基础用法
最基础的用法，通过这个组件来给组件之间提供统一的间距。
<script setup>
import ccButton from '../../src/components/button'
import ccSpace from '../../src/components/space'
import ccCard from '../../src/components/card'
import { ref } from 'vue'
</script>
<cc-space warp width="650px">
    <cc-card width="300px" lineHidden>
    <template #title>Card</template>
          <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </cc-card>
    <cc-card width="300px" lineHidden>
        <template #title>Card</template>
          <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
        </div>
    </cc-card>
    <cc-card width="300px" lineHidden>
        <template #title>Card</template>
        <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
        </div>
    </cc-card>
</cc-space>


::: details 点击查看代码
```vue
<template>
    <cc-space warp width="650px">
        <cc-card width="300px" lineHidden>
        <template #title>Card</template>
            <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
        </div>
        </cc-card>
        <cc-card width="300px" lineHidden>
            <template #title>Card</template>
            <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
            </div>
        </cc-card>
        <cc-card width="300px" lineHidden>
            <template #title>Card</template>
            <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
            </div>
        </cc-card>
    </cc-space>
</template>
```
:::

## 垂直布局
使用 `direction` 来控制布局的方式, 背后实际上是利用了 `flex-direction` 来控制.

我们也提供垂直布局方式。
<cc-space direction="vertical">
    <cc-card width="300px" lineHidden>
    <template #title>Card</template>
        <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
    </div>
    </cc-card>
    <cc-card width="300px" lineHidden>
        <template #title>Card</template>
        <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
        </div>
    </cc-card>
    <cc-card width="300px" lineHidden>
        <template #title>Card</template>
        <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
        </div>
    </cc-card>
</cc-space>


::: details 点击查看代码
```vue
<template>
    <cc-space direction="vertical">
        <cc-card width="300px" lineHidden>
        <template #title>Card</template>
            <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
        </div>
        </cc-card>
        <cc-card width="300px" lineHidden>
            <template #title>Card</template>
            <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
            </div>
        </cc-card>
        <cc-card width="300px" lineHidden>
            <template #title>Card</template>
            <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
            </div>
        </cc-card>
    </cc-space>
</template>
```
:::


## 自定义Size(间距大小)
可以通过传入自己定义的大小 (数值类型) 来设置组件间的间隔大小
<cc-space warp width="800px" size="40px">
    <cc-card width="300px" lineHidden >
    <template #title>Card</template>
          <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </cc-card>
    <cc-card width="300px" lineHidden>
        <template #title>Card</template>
          <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
        </div>
    </cc-card>
    <cc-card width="300px" lineHidden>
        <template #title>Card</template>
        <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
        </div>
    </cc-card>
</cc-space>


::: details 点击查看代码
```vue
<template>
    <cc-space warp width="800px" size="40px">
        <cc-card width="300px" lineHidden >
        <template #title>Card</template>
            <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
        </div>
        </cc-card>
        <cc-card width="300px" lineHidden>
            <template #title>Card</template>
            <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
            </div>
        </cc-card>
        <cc-card width="300px" lineHidden>
            <template #title>Card</template>
            <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
            </div>
        </cc-card>
    </cc-space>
</template>
```
:::

## 换行
`space`可以通过`width`属性和`height`设置宽高，在宽高固定的情况下，可以使用`warp`属性来控制自动换行型行为
<cc-space warp width="600px">
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
    <cc-button type="primary">Button</cc-button>
</cc-space>



::: details 点击查看代码
```vue
<template>
    <cc-space warp width="600px">
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
        <cc-button type="primary">Button</cc-button>
    </cc-space>
</template>
```
:::