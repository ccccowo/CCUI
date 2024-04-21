---
outline: deep
---

# Upload 上传

在一组备选项中进行多选

## 基础用法
通过 `lanel`和`btnType`属性 你可以传入自定义的上传按钮类型和文字。可通过设置`mutiple`属性来决定是否可以同时上传多个文件

通过设置`change`方法，当上传文件发生改变时，可获取文件列表

<script setup>
import ccUpload from '../../src/components/upload'
import ccButton from '../../src/components/button'
import { ref } from 'vue'

const change = (fileList)=>{
    console.log(fileList)
}
</script>

<cc-upload @change="change" label="Click to upload" btnType="primary" mutiple></cc-upload>


::: details 点击查看代码
```vue
<template>
    <cc-upload @change="change" label="Click to upload" btnType="primary" mutiple></cc-upload>
</template>

<script setup>
import { ref } from 'vue'

const change = (fileList)=>{
    console.log(fileList)
}
</script>
```
:::

## 拖拽上传
你可以将文件拖拽到特定区域以进行上传。
    <cc-upload @change="change" drag></cc-upload>

::: details 点击查看代码
```vue
<template>
    <cc-upload @change="change" drag></cc-upload>
</template>

<script setup>
import { ref } from 'vue'

const change = (fileList)=>{
    console.log(fileList)
}
</script>
```
:::
