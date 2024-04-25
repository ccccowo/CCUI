# 快速开始
本节将介绍如何在项目中使用CCUI

## 用法
### 完整导入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
::: code-group

```js [main.js]
import { createApp } from 'vue'
import CCUI from 'ccowo-ui'
import 'ccowo-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(CCUI)
app.mount('#app')

```

:::



### 按需引入
您需要手动导入要使用的组件。但是样式还是需要全部引入

::: code-group

```js [html]
<template>
  <cc-button>我是 CcButton</cc-button>
</template>
<script>
  import { CcButton } from 'ccowo-ui'
  export default {
    components: { CcButton },
  }
</script>

```

:::

## 开始使用
现在你可以启动项目了。 对于每个组件的用法，请查阅对应的独立文档。