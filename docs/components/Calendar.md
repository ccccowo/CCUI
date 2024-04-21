---
outline: deep
---

# Calendar 日历

显示日期

## 基础用法
设置 `date` 来指定当前显示的月份。 如果 `date` 未指定，则显示当年当月当日。 `date` 支持 v-model 双向绑定。

<script setup>
    import {ref} from 'vue'
    import ccButton from '../../src/components/button'
    import ccCalendar from '../../src/components/calendar'
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
<cc-calendar v-model="date"></cc-calendar>

::: details 点击查看代码
```vue
<template>
    <cc-calendar v-model="date"></cc-calendar>
</template>

<script setup>
import { ref } from 'vue'
const date = ref(new Date())
</script>
```
:::

## API
### Attributes
 <!-- <cc-table :data="tableData" :columns="tableHeader" width="100%"> </cc-table> -->




