---
outline: deep
next: false
---

# Carousel 走马灯

在有限空间内，循环播放同一类型的图片

## 基础用法
使用`images`属性传入一个图片对象数组就得到了一个走马灯，可用`auto`属性来控制走马灯是否会自动播放，`time`属性来设定自动切换的时间(不可少于`1000ms`)

<script setup>
import ccUpload from '../../src/components/upload'
import ccButton from '../../src/components/button'
import ccCarousel from '../../src/components/carousel'
import { ref } from 'vue'

const imgList = [
    {
        url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0',
        key: 1,
        alt: '风景'
    },
    {
        url: 'https://ts1.cn.mm.bing.net/th/id/R-C.0173a09b9c2ba6da89cfd89c492cae5b?rik=rmrp5VZYz2BTgQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f78%2f78_9.jpg&ehk=1T8b3FMg14%2bqrb1H9CaROVxQVIhp2vvDyfGbMjzzTKA%3d&risl=&pid=ImgRaw&r=0',
        key: 2,
        alt: '风景'
    },
    {
        url: 'https://img.zcool.cn/community/0122a15d22b574a801213763e36eba.jpg@2o.jpg',
        key: 3,
        alt: '风景'
    }
]
</script>

<cc-carousel :images="imgList" auto time="1800"></cc-carousel>

::: details 点击查看代码
```vue
<template>
    <cc-carousel :images="imgList" auto time="1800"></cc-carousel>
</template>

<script setup>
import { ref } from 'vue'

const imgList = [
    {
        url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0',
        key: 1,
        alt: '风景'
    },
    {
        url: 'https://ts1.cn.mm.bing.net/th/id/R-C.0173a09b9c2ba6da89cfd89c492cae5b?rik=rmrp5VZYz2BTgQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f78%2f78_9.jpg&ehk=1T8b3FMg14%2bqrb1H9CaROVxQVIhp2vvDyfGbMjzzTKA%3d&risl=&pid=ImgRaw&r=0',
        key: 2,
        alt: '风景'
    },
    {
        url: 'https://img.zcool.cn/community/0122a15d22b574a801213763e36eba.jpg@2o.jpg',
        key: 3,
        alt: '风景'
    }
]
</script>
```
:::

## 切换箭头
可以设置切换箭头的显示时机

`arrow` 属性定义了切换箭头的显示时机。 默认情况下，切换箭头只有在鼠标 `hover` 到走马灯上时才会显示。 若将 `arrow` 设置为 `always`，则会一直显示；设置为 `never`，则会一直隐藏。
<cc-carousel :images="imgList" arrow="always"></cc-carousel>

::: details 点击查看代码
```vue
<template>
    <cc-carousel :images="imgList" arrow="always"></cc-carousel>
</template>

<script setup>
import { ref } from 'vue'

const imgList = [
    {
        url: 'https://ts1.cn.mm.bing.net/th/id/R-C.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0',
        key: 1,
        alt: '风景'
    },
    {
        url: 'https://ts1.cn.mm.bing.net/th/id/R-C.0173a09b9c2ba6da89cfd89c492cae5b?rik=rmrp5VZYz2BTgQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f78%2f78_9.jpg&ehk=1T8b3FMg14%2bqrb1H9CaROVxQVIhp2vvDyfGbMjzzTKA%3d&risl=&pid=ImgRaw&r=0',
        key: 2,
        alt: '风景'
    },
    {
        url: 'https://img.zcool.cn/community/0122a15d22b574a801213763e36eba.jpg@2o.jpg',
        key: 3,
        alt: '风景'
    }
]
</script>
```
:::
