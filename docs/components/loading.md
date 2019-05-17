---
title: 加载 Loading
---

# 加载 Loading
### 引入组件

```json
{
  "usingComponents": {
    "ac-loading": "@csr/awesome_components/components/loading/loading"
  }
}
```

```html
<ac-loading></ac-loading>
```

### 不同的样式

```html
<ac-loading></ac-loading>
<ac-loading type="grow"></ac-loading>
<ac-loading type="flood"></ac-loading>
<ac-loading type="pendulum"></ac-loading>
<ac-loading type="dots"></ac-loading>
<ac-loading type="wave"></ac-loading>
<ac-loading type="boomerang"></ac-loading>
<ac-loading type="sudoku"></ac-loading>
<ac-loading type="snake"></ac-loading>
<ac-loading type="ring"></ac-loading>
```

### 自定义宽高颜色

```html
<ac-loading width="200" height="200" color="pink"></ac-loading>
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| type | String | loading类型，可选值有：loading，grow，flood，ring，pendulum，boomerang，dots，sudoku，snake，wave | loading
| width | String\| Number | 宽度 | 
| height | String\| Number | 高度 | 
| color | String | 颜色 | black |

### 不同类型loading的宽高比
| 类型 | 宽高比 |
| :---: | :----: |
| loading | 1:1 |
| grow | 2:1 |
| flood | 1:1 |
| ring | 1:1 |
| pendulum | 5:1 |
| boomerang | 3:4 |
| dots | 4:1 |
| sudoku | 1:1 |
| snake | 1:1 |
| wave | 4:1 |


### 外部样式类

| 名称 | 说明 |
| :---: | :----: |
| custom-class-root | loading根元素样式类 | 


::: tip
由于我在写演示小程序的时候发现，在iphone XS MAX上动画的延迟如果是负数会出现
延迟效果消失，导致loading动画错乱，所以都改为了正数延迟，如果你没遇到这种问题
可以自行修改miniprogram_npm -> @csr -> awesome_components -> components -> loading
-> loading.wxss 中相关css
:::