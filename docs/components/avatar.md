---
title: 头像 Avatar
---

# 头像 Avatar
### 引入组件

```json
{
  "usingComponents": {
    "ac-avatar": "@csr/awesome_components/components/avatar/avatar"
  }
}
```

```html
<ac-avatar>头像</ac-avatar>
```

### 头像形状

```html
<ac-avatar url="{{url}}"></ac-avatar>
<ac-avatar url="{{url}}" shape="rounded"></ac-avatar>
<ac-avatar url="{{url}}" shape="circle"></ac-avatar>
```

```js
Page({
  data: {url: 'xxx.png'}
})
```

### 头像尺寸

```html
<ac-avatar width="40" url="{{url}}"></ac-avatar>
<ac-avatar width="80" url="{{url}}"></ac-avatar>
<ac-avatar width="120" url="{{url}}"></ac-avatar>
<ac-avatar width="160" url="{{url}}"></ac-avatar>
```

```js
Page({
  data: {url: 'xxx.png'}
})
```

### 文字类头像

```html
<ac-avatar>Allen</ac-avatar>
```

### 自定义文字样式

```html
<ac-avatar custom-class-text="small-text">Allen</ac-avatar>
```

```css
.small-text {
  font-size: 24rpx;
}
```

### 自定义头像背景色

```html
<ac-avatar bg-color="purple">purple</ac-avatar>
```

### 消息提示

```html
<ac-avatar count="1">Allen</ac-avatar>
<ac-avatar count="50">Tom</ac-avatar>
<ac-avatar count="100">Jack</ac-avatar>
```

### 自定义右上角内容

```html
<ac-avatar visible-dot="{{true}}">
  <image class="custom-tag" src="{{tag}}" slot="tag" mode="widthFix"/>
  purple
</ac-avatar>
```

```js
Page({
  data: {tag: 'xxx.png'}
})
```

### 头像组

```html
<ac-avatar bg-color="purple" urls="{{urls}}"></ac-avatar>
```

```js
Page({
  data: {urls: ['xxx.png', 'yyy,png', 'zzz.png']}
})
```


### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| url | String | 头像url |
| urls | Array | 头像组的url数组 | []
| width | String \| Number | 头像宽度，单位是rpx，不用传单位 | 100rpx
| height | String \| Number | 头像高度，单位是rpx，不用传单位 | 100rpx
| shape | String | 头像形状，可选值：square（直角矩形），rounded（圆角矩形），circle（圆形） | square
| count | String \| Number | 消息数量 | 
| visible-dot | Boolean | 自定义右上角标签时，需要传入true | false
| bg-color | String | 头像背景色 | #318d31

### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onclick | 点击头像时触发 | event: Event


### slot

| 名称 | 说明 |
| :---: | :----: |
| tag | 用于自定义右上角标签 | 

### 外部样式类

| 名称 | 说明 |
| :---: | :----: |
| custom-class-text | 文字类头像中文字的样式类 |


