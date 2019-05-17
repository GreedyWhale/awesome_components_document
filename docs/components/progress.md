---
title: 进度条 Progress
---

# 进度条 Progress
### 引入组件

```json
{
  "usingComponents": {
    "ac-progress": "@csr/awesome_components/components/progress/progress"
  }
}
```

```html
<ac-progress percent="{{percent}}"></ac-progress>
```

```js
Page({
  data: {percent: 80}
})
```

### 基础用法
```html
<ac-progress percent="{{percent}}"></ac-progress>
```

```js
Page({
  data: {percent: 80}
})
```

### 显示进度
```html
<ac-progress percent="{{percent}}">{{percent}}%</ac-progress>
```

```js
Page({
  data: {percent: 80}
})
```

### 进度条尺寸
```html
<ac-progress percent="{{percent}}" custom-style="{{ {height: '40rpx'} }}"></ac-progress>
<ac-progress percent="{{percent}}" custom-style="{{ {height: '25rpx', width: '80%'} }}"></ac-progress>
```

```js
Page({
  data: {percent: 80}
})
```

### 进度条背景色

```html
<ac-progress percent="{{percent}}" custom-style="{{ {background: red} }}"></ac-progress>
```

```js
Page({
  data: {percent: 80}
})
```

### 进度条颜色

```html
<ac-progress percent="{{percent}}" progress-color="pink"></ac-progress>
```

```js
Page({
  data: {percent: 80}
})
```

### 动态条纹效果

```html
<ac-progress percent="{{percent}}" stripe></ac-progress>
```

```js
Page({
  data: {percent: 80}
})
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| percent | String \| Number | 进度百分比 |
| customStyle | Object | 自定义进度条样式的对象，如果有background属性，改变的是进度条下面的背景色而不是进度条本身的背景色 | 
| progress-color | String | 进度条颜色 | #289428
| stripe | Boolean | 是否开启动态条纹效果 | false

### slot

| 名称 | 说明 |
| :---: | :----: |
|  | 会显示在进度条中间的文字 | 