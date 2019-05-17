---
title: 通知栏 NoticeBar
---

# 通知栏 NoticeBar
### 引入组件

```json
{
  "usingComponents": {
    "ac-notice-bar": "@csr/awesome_components/components/notice-bar/notice-bar"
  }
}
```

```html
<ac-notice-bar wx:if="{{visible}}" bindonclose="onClose" text="我是输给了地球的重力"></ac-notice-bar>
```

```js
Page({
  data: {
    visible: true,
  },
  onClose() {
    this.setData({
      visible: false
    })
  }
})
```

### 基础用法

```html
<ac-notice-bar wx:if="{{visible}}" bindonclose="onClose" text="我是输给了地球的重力"></ac-notice-bar>
```

```js
Page({
  data: {
    visible: true,
  },
  onClose() {
    this.setData({
      visible: false
    })
  }
})
```

### 自定义颜色

```html
<ac-notice-bar
  wx:if="{{visible}}" bindonclose="onClose"
  text="我是输给了地球的重力"
  color="#363433" bg-color="#10aec2"
></ac-notice-bar>
```

```js
Page({
  data: {
    visible: true,
  },
  onClose() {
    this.setData({
      visible: false
    })
  }
})
```

### 不滚动

```html
<ac-notice-bar
  wx:if="{{visible}}" bindonclose="onClose" autoplay="{{false}}"
  text="为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！"
>
</ac-notice-bar>
```

```js
Page({
  data: {
    visible: true,
  },
  onClose() {
    this.setData({
      visible: false
    })
  }
})
```

### 不展示关闭图标

```html
<ac-notice-bar
  wx:if="{{visible1}}" bindonclose="onClose" close="{{false}}"
  text="为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！"
>
</ac-notice-bar>
```

```js
Page({
  data: {
    visible: true,
  },
  onClose() {
    this.setData({
      visible: false
    })
  }
})
```

### 不展示通知图标

```html
<ac-notice-bar
  wx:if="{{visible1}}" bindonclose="onClose" visible-icon="{{false}}"
  text="为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！"
>
</ac-notice-bar>
```

```js
Page({
  data: {
    visible: true,
  },
  onClose() {
    this.setData({
      visible: false
    })
  }
})
```

### 改变速度

```html
<ac-notice-bar
  wx:if="{{visible1}}" bindonclose="onClose" speed="5"
  text="为了保护心爱的学园都市，科学家们决定让七名LV5站出来……成为偶像！"
>
</ac-notice-bar>
```

```js
Page({
  data: {
    visible: true,
  },
  onClose() {
    this.setData({
      visible: false
    })
  }
})
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| top | String\| Number | 距离顶部距离 | 0
| color | String | 字体颜色 | #FFFFFF
| bg-color | String | 背景色 | #19c019
| visible-icon | Boolean | 是否展示前缀图标  | true
| icon-color | String | 图标颜色  | 默认和字体颜色相同
| close | Boolean | 是否显示关闭按钮 | true
| autoplay | Boolean | 是否滚动 | true
| speed | String\| Number | 滚动速度，单位s。单位不用传  | 10

### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onclick | 点击NoticeBar时触发 | event: Event
| onclose | 点击关闭按钮时触发 | event: Event

### 外部样式类

| 名称 | 说明 |
| :---: | :----: |
| custom-class-root | 组件根元素的样式类 |