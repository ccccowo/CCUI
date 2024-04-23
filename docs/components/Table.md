---
outline: deep
next: false
---

# Table 表格

显示日期

## 基础用法
使用`data`属性来定义表格内容，`columns`属性来定义表头内容。还可以使用`width`属性来定义宽度

<script setup>
    import {ref} from 'vue'
    import ccButton from '../../src/components/button'
    import ccTable from '../../src/components/table'
    const tableHeader = ref([
        {
            value: 'id',
            label: 'ID',
        },
        {
            value: 'name',
            label: '姓名',
        },
        {
            value: 'age',
            label: '年龄',
        },
        {
            value: 'gender',
            label: '性别',
        },
        {
            value: 'address',
            label: '住址',
        }
    ])
    const tableData = ref([
        {
            id: 1,
            name: 'Tom',
            age: 18,
            gender: '男',
            address: 'New York No. 1 Lake Park',
        },
        {
            id: 2,
            name: 'Jerry',
            age: 20,
            gender: '女',
            address: 'London No. 1 Lake Park',
        },
        {
            id: 3,
            name: 'Lucy',
            age: 22,
            gender: '女',
            address: 'Sidney No. 1 Lake Park',
        }
    ])
</script>

<cc-table :data="tableData" :columns="tableHeader" width="700px"></cc-table>

::: details 点击查看代码
```vue
<template>
   <cc-table :data="tableData" :columns="tableHeader" width="800px"> </cc-table>
</template>

<script setup>
import { ref } from 'vue'

const tableHeader = ref([
    {
        value: 'id',
        label: 'ID',
    },
    {
        value: 'name',
        label: '姓名',
    },
    {
        value: 'age',
        label: '年龄',
    },
    {
        value: 'gender',
        label: '性别',
    },
    {
        value: 'address',
        label: '住址',
    }
])
const tableData = ref([
    {
        id: 1,
        name: 'Tom',
        age: 18,
        gender: '男',
        address: 'New York No. 1 Lake Park',
    },
    {
        id: 2,
        name: 'Jerry',
        age: 20,
        gender: '女',
        address: 'London No. 1 Lake Park',
    },
    {
        id: 3,
        name: 'Lucy',
        age: 22,
        gender: '女',
        address: 'Sidney No. 1 Lake Park',
    }
])
</script>
```
:::

## 带斑马纹表格
使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe` 可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹。

<cc-table :data="tableData" :columns="tableHeader" width="700px" stript> </cc-table>

::: details 点击查看代码
```vue
<template>
   <cc-table :data="tableData" :columns="tableHeader" width="700px" stript> </cc-table>
</template>

<script setup>
import { ref } from 'vue'

const tableHeader = ref([
    {
        value: 'id',
        label: 'ID',
    },
    {
        value: 'name',
        label: '姓名',
    },
    {
        value: 'age',
        label: '年龄',
    },
    {
        value: 'gender',
        label: '性别',
    },
    {
        value: 'address',
        label: '住址',
    }
])
const tableData = ref([
    {
        id: 1,
        name: 'Tom',
        age: 18,
        gender: '男',
        address: 'New York No. 1 Lake Park',
    },
    {
        id: 2,
        name: 'Jerry',
        age: 20,
        gender: '女',
        address: 'London No. 1 Lake Park',
    },
    {
        id: 3,
        name: 'Lucy',
        age: 22,
        gender: '女',
        address: 'Sidney No. 1 Lake Park',
    }
])
</script>
```
:::




