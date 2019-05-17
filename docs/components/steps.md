---
title: 步骤条 Steps
---

# 步骤条 Steps
### 引入组件

```json
{
  "usingComponents": {
    "ac-steps": "@csr/awesome_components/components/steps/steps"
  }
}
```

```html
<ac-steps steps="{{steps}}" current-step="{{currentStep}}"></ac-steps>
```

```js
Page({
  data: {
    steps: ['任务1', '任务二', '任务三'],
    currentStep: 2
  }
})
```

### 基础用法

```html
<ac-steps steps="{{steps}}" current-step="{{currentStep}}"></ac-steps>
```

```js
Page({
  data: {
    steps: ['任务1', '任务二', '任务三'],
    currentStep: 2
  }
})
```

### 自定义颜色

```html
<ac-steps steps="{{steps}}" current-step="{{currentStep}}" colors="{{colors}}"></ac-steps>
```

```js
Page({
  data: {
    steps: ['任务1', '任务二', '任务三'],
    currentStep: 2,
    colors: {
      finished: '#ee3f4d',
      active: '#10aec2'
    }
  }
})
```

### 自定义图标

```html
<ac-steps
  steps="{{steps}}"
  current-step="{{currentStep}}"
  custom-class-icon="iconfont icon-notice"></ac-steps>
```

```js
Page({
  data: {
    steps: ['任务1', '任务二', '任务三'],
    currentStep: 2
  }
})
```

```css
/* 组件的icon是通过iconfont实现的，所以需要用iconfont进行覆盖 */
@import '../../assets/wxss/icon.wxss';

.icon-notice:before {
  content: "\e6c7" !important;
}
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| steps | Array | 步骤数据 | 
| current-step | Number | 当前步骤 | 
| colors | Object | 自定义完成步骤的颜色和当前步骤的颜色 | {active: '#1f68f1', finished: '#158b15'}

### 外部样式类

| 名称 | 说明 |
| :---: | :----: |
| custom-class-title | 步骤名样式类 | 
| custom-class-icon | 步骤图标样式类 | 

::: danger
currentStep从1开始
:::

