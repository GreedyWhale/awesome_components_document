---
title: 点赞 GiveLike
---

# 点赞 GiveLike
### 引入组件

```json
{
  "usingComponents": {
    "ac-give-like": "@csr/awesome_components/components/give-like/give-like"
  }
}
```

```html
<ac-give-like></ac-give-like>
```

### 不同尺寸

```html
<ac-give-like custom-class-icon="samll-size"></ac-give-like>
<ac-give-like custom-class-icon="medium-size"></ac-give-like>
<ac-give-like custom-class-icon="big-size"></ac-give-like>
<ac-give-like custom-class-icon="bigger-size"></ac-give-like>
```

```css
.samll-size {
  font-size: 24rpx !important;
}
.medium-size {
  font-size: 48rpx !important;
}
.big-size {
  font-size: 64rpx !important;
}
.bigger-size {
  font-size: 88rpx !important;
}
```

### 自定义提示文字

```html
<ac-give-like tips="like + 1"></ac-give-like>
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| default-active | Boolean | 是否默认激活 |
| tips | String | 点击时的提示 | +1

### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onclick | 点击按钮时触发，可以从`event.detail.isActive`获取当前激活状态 | event: Event

### 外部样式类

| 名称 | 说明 |
| :---: | :----: |
| custom-class-icon | 图标的样式类 |