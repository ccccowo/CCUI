---
outline: deep
next: false
---

# Button 按钮

常用的操作按钮

## 基础用法
使用`type`、`plain`、`round`和`circle`来定义按钮的样式。

<script setup>
    import ccButton from '../../src/components/button'
    import ccSpace from '../../src/components/space'
</script>
<cc-space warp>
    <cc-button>Default</cc-button>
    <cc-button type="primary">Primary</cc-button>
    <cc-button type="success">Success</cc-button>
    <cc-button type="danger">Danger</cc-button>
    <cc-button type="warning">Warning</cc-button>
    <cc-button type="info">Info</cc-button>
    <cc-button plain >Plain</cc-button>
    <cc-button plain type="primary">Primary</cc-button>
    <cc-button plain type="success">Success</cc-button>
    <cc-button plain type="danger">Danger</cc-button>
    <cc-button plain type="warning">Warning</cc-button>
    <cc-button plain type="info">Info</cc-button>
    <cc-button round >Round</cc-button>
    <cc-button round type="primary">Primary</cc-button>
    <cc-button round type="success">Success</cc-button>
    <cc-button round type="danger">Danger</cc-button>
    <cc-button round type="warning">Warning</cc-button>
    <cc-button round type="info">Info</cc-button>
    <cc-button circle>圆</cc-button>
    <cc-button circle type="primary">圆</cc-button>
    <cc-button circle type="success">圆</cc-button>
    <cc-button circle type="danger">圆</cc-button>
    <cc-button circle type="warning">圆</cc-button>
    <cc-button circle type="info">圆</cc-button>
</cc-space>




::: details 点击查看代码
```vue
    <cc-button>Default</cc-button>
    <cc-button type="primary">Primary</cc-button>
    <cc-button type="success">Success</cc-button>
    <cc-button type="danger">Danger</cc-button>
    <cc-button type="warning">Warning</cc-button>
    <cc-button type="info">Info</cc-button>

    <cc-button plain >Plain</cc-button>
    <cc-button plain type="primary">Primary</cc-button>
    <cc-button plain type="success">Success</cc-button>
    <cc-button plain type="danger">Danger</cc-button>
    <cc-button plain type="warning">Warning</cc-button>
    <cc-button plain type="info">Info</cc-button>

    <cc-button round >Round</cc-button>
    <cc-button round type="primary">Primary</cc-button>
    <cc-button round type="success">Success</cc-button>
    <cc-button round type="danger">Danger</cc-button>
    <cc-button round type="warning">Warning</cc-button>
    <cc-button round type="info">Info</cc-button>

    <cc-button circle>圆</cc-button>
    <cc-button circle type="primary">圆</cc-button>
    <cc-button circle type="success">圆</cc-button>
    <cc-button circle type="danger">圆</cc-button>
    <cc-button circle type="warning">圆</cc-button>
    <cc-button circle type="info">圆</cc-button>
```
:::

## 禁用状态
可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。
<cc-space warp>
    <cc-button disabled>Default</cc-button>
    <cc-button type="primary" disabled>Primary</cc-button>
    <cc-button type="success" disabled>Success</cc-button>
    <cc-button type="danger" disabled>Danger</cc-button>
    <cc-button type="warning" disabled>Warning</cc-button>
    <cc-button type="info" disabled>Info</cc-button>
</cc-space>

::: details 点击查看代码
```vue
    <cc-button disabled>Default</cc-button>
    <cc-button type="primary" disabled>Primary</cc-button>
    <cc-button type="success" disabled>Success</cc-button>
    <cc-button type="danger" disabled>Danger</cc-button>
    <cc-button type="warning" disabled>Warning</cc-button>
    <cc-button type="info" disabled>Info</cc-button>
```
:::

## 调整尺寸
除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`、`middle`和`small`三种值，默认为`middle`。

<cc-space warp width="300px">
    <cc-button size="small">Default</cc-button>
    <cc-button>Default</cc-button>
    <cc-button size="large">Default</cc-button>
    <cc-button size="small" round>Default</cc-button>
    <cc-button round>Default</cc-button>
    <cc-button size="large" round>Default</cc-button>
    <cc-button size="small" circle>圆</cc-button>
    <cc-button circle>圆</cc-button>
    <cc-button size="large"circle>圆</cc-button>
</cc-space>

::: details 点击查看代码
```vue
    <cc-button size="small">Default</cc-button>
    <cc-button>Default</cc-button>
    <cc-button size="large">Default</cc-button>
    <cc-button size="small" round>Default</cc-button>
    <cc-button round>Default</cc-button>
    <cc-button size="large" round>Default</cc-button>
    <cc-button size="small" circle>圆</cc-button>
    <cc-button circle>圆</cc-button>
    <cc-button size="large"circle>圆</cc-button>
```
:::






