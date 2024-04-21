---
outline: deep
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法
需要设置 `v-model:visible` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。

 Dialog 可以自定义三个个部分：`title`、`body` 和 `footer`，
`title`可以使用`title`属性传入，也可以使用具名为`title`的`slot`,
`footer` 需要具名为`footer` 的 `slot`。 
<script setup>
import ccButton from '../../src/components/button'
import ccDialog from '../../src/components/dialog'
import ccCalendar from '../../src/components/calendar'
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
const visible4 = ref(false)
const visible5 = ref(false)
const date = ref(new Date())
const handleClose1 = ()=>{
  visible1.value = false
}
const handleClose2 = ()=>{
  visible2.value = false
}
const handleClose3 = ()=>{
  visible3.value = false
}
const handleClose4 = ()=>{
  visible4.value = false
}
const handleClose5 = ()=>{
    visible5.value = false
}
</script>


<cc-button @click="visible1 = true">Click to open the Dialog</cc-button>
<cc-dialog title="温馨提示" v-model:visible="visible1">
    这是一条信息
    <template #footer>
        <cc-button type="primary" @click="handleClose1">确定</cc-button>
        <cc-button @click="handleClose1">取消</cc-button>
    </template>
</cc-dialog>


::: details 点击查看代码
```vue
<template>
  <cc-button @click="visible = true">Click to open the Dialog</cc-button>

  <cc-dialog title="温馨提示" v-model:visible="visible">
      这是一条信息
      <template #footer>
          <cc-button type="primary" @click="handleClose">确定</cc-button>
          <cc-button @click="handleClose">取消</cc-button>
      </template>
  </cc-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const handleClose = ()=>{
    visible.value = false
}
</script>
```
:::

## 自定义顶部位置与宽度
对话框可以自定义距离顶部的位置和宽度，支持传入数字+单位的形式，例如`300px`、`80%`
<cc-button @click="visible3 = true">Click to open the Dialog</cc-button>
<cc-dialog top="0px" width="80%" title="温馨提示" v-model:visible="visible3">
    这是一条信息
    <template #footer>
        <cc-button type="primary" @click="handleClose3">确定</cc-button>
        <cc-button @click="handleClose3">取消</cc-button>
    </template>
</cc-dialog>

::: details 点击查看代码
```vue
<template>
  <cc-button @click="visible = true">Click to open the Dialog</cc-button>

  <cc-dialog  top="0px" width="80%" title="温馨提示" v-model:visible="visible">
      这是一条信息
      <template #footer>
          <cc-button type="primary" @click="handleClose">确定</cc-button>
          <cc-button @click="handleClose">取消</cc-button>
      </template>
  </cc-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const handleClose = ()=>{
    visible.value = false
}
</script>
```
:::


## 自定义头部
具名为`title`的`slot`可用于自定义显示标题的区域。 除了使用此插槽外，使用 title 属性也能读取为对话框标题。
<cc-button @click="visible2 = true">Open Dialog with customized header</cc-button>
<cc-dialog v-model:visible="visible2">
    <template #title>
        <div style="color:rgb(18, 83, 93)">
            温馨提示
        </div>
    </template>
    这是一条信息
    <template #footer>
        <cc-button type="primary" @click="handleClose2">确定</cc-button>
        <cc-button @click="handleClose2">取消</cc-button>
    </template>
</cc-dialog>


::: details 点击查看代码
```vue
<template>
  <cc-button @click="visible = true">Open Dialog with customized header</cc-button>

  <cc-dialog v-model:visible="visible">
      <template #title>
          <div style="color:rgb(18, 83, 93)">
              温馨提示
          </div>
      </template>
      这是一条信息
      <template #footer>
          <cc-button type="primary" @click="handleClose">确定</cc-button>
          <cc-button @click="handleClose">取消</cc-button>
      </template>
  </cc-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const handleClose = ()=>{
    visible.value = false
}
</script>
```
:::

## 自定义内容
对话框的内容可以是任何东西，甚至是一个日历。 此示例显示如何在 `Dialog` 中使用 `CCUI` 的日历
<cc-button @click="visible4 = true">Open a Calendar Dialog</cc-button>
<cc-dialog v-model:visible="visible4" title="日历" width="700px">
    <cc-calendar v-model="date"></cc-calendar>
    <template #footer>
        <cc-button type="primary" @click="handleClose4">确定</cc-button>
        <cc-button @click="handleClose4">取消</cc-button>
    </template>
</cc-dialog>



::: details 点击查看代码
```vue
<template>
  <cc-button @click="visible = true">Open a Calendar Dialog</cc-button>

  <cc-dialog v-model:visible="visible" title="日历" width="700px">
      <cc-calendar v-model="date"></cc-calendar>
      <template #footer>
          <cc-button type="primary" @click="handleClose">确定</cc-button>
          <cc-button @click="handleClose">取消</cc-button>
      </template>
  </cc-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const date = ref(new Date())
const handleClose = ()=>{
    visible.value = false
}
</script>
```
:::

## 控制叉号
可以通过`hidden`属性来控制对话框右上角叉号的显示与隐藏
<cc-button @click="visible5 = true">Open a Calendar Dialog</cc-button>
<cc-dialog hidden v-model:visible="visible5" title="Dialog" >
    这是一条消息
    <template #footer>
        <cc-button type="primary" @click="handleClose5">确定</cc-button>
        <cc-button @click="handleClose5">取消</cc-button>
    </template>
</cc-dialog>



::: details 点击查看代码
```vue
<template>
<cc-button @click="visible = true">Open a Calendar Dialog</cc-button>

<cc-dialog hidden v-model:visible="visible" title="Dialog" >
    这是一条消息
    <template #footer>
        <cc-button type="primary" @click="handleClose">确定</cc-button>
        <cc-button @click="handleClose">取消</cc-button>
    </template>
</cc-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const handleClose = ()=>{
    visible.value = false
}
</script>
```
:::