---
title: 自定义导航栏 NavBar
---

# 自定义导航栏 NavBar
### 引入组件

微信小程序现已支持全局组件，所以在app.json引入即可在其他页面直接使用，[相关链接](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)，要加上
miniprogram_npm/这个文件路径，不加会找不到（如果后续微信小程序修复该问题可去掉）
```json
{
  "usingComponents": {
    "ac-nav-bar": "miniprogram_npm/@csr/awesome_components/components/nav-bar/nav-bar"
  }
}
```

```html
<ac-nav-bar title="NavBar" home-path="/pages/home/home"></ac-nav-bar>
```

### 基础用法

```html
<ac-nav-bar title="NavBar" home-path="/pages/home/home"></ac-nav-bar>
```

### 改变标题栏背景颜色
```html
<ac-nav-bar title="NavBar" home-path="/pages/home/home" background-color="red"></ac-nav-bar>
```

### 改变导航栏字体颜色
```html
<ac-nav-bar title="NavBar" home-path="/pages/home/home" nav-bar-text-color="white"></ac-nav-bar>
```

### 改变导航栏字体颜色
```html
<ac-nav-bar title="NavBar" home-path="/pages/home/home" nav-bar-text-color="white"></ac-nav-bar>
```

### 使导航栏字体icon颜色和字体颜色不同
```html
<ac-nav-bar
  title="NavBar"
  home-path="/pages/home/home"
  nav-bar-icon-color="pink"
  nav-bar-text-color="white"
></ac-nav-bar>
```

### 使用图片作为背景

```html
<ac-nav-bar
  title="NavBar"
  home-path="/pages/home/home"
  bg-image="xxx.png"
></ac-nav-bar>
```

### 自定义左上角按钮

```html
<ac-nav-bar
  title="NavBar"
  home-path="/pages/home/home"
  custom-left-corner="{{true}}"
>
  <view slot="left-corner" style="height: 100%;">返回</view>
</ac-nav-bar>
```

### 自定义中间内容

```html
<ac-nav-bar home-path="/pages/home/home">
  <view slot="content">自定义内容</view>
</ac-nav-bar>
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| title | String | 页面标题 | 
| nav-bar-text-color | String | 页面标题颜色 | black
| nav-bar-icon-color | String | 左上角按钮颜色，如不传默认和标题颜色相同 |
| pill-padding-bottom | Number | 右上角胶囊按钮的padding-left，单位px | 5
| custom-left-corner | Boolean | 开启自定义左上角内容 | false
| home-path | String | 首页路径 | 
| background-color | String | 导航栏背景色 | transparent
| z-index | String \| Number | 导航栏的z-index | 3
| bg-image | string | 导航栏背景图 | 
| img-mode | string | 导航栏背景图，裁剪模式 | widthFix
| enable-placeholder | Boolean | 是否开启占位元素，该元素的高度和navbar的高度相同 | true


### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onlayout | 导航栏ready生命周期时触发，返回导航栏的高度，单位px，event.detail = {height: xx} | event: Event


### slot

| 名称 | 说明 |
| :---: | :----: |
| left-corner | 左上角内容 |
| content | 中间内容 |

### 外部样式类

| 名称 | 说明 |
| :---: | :----: |
| custom-class-title | 导航栏标题样式类 | 
| custom-class-img | 导航栏背景图片样式类 | 

::: danger
1. 该组件的高度是通过微信小程序提供的getMenuButtonBoundingClientRect这个api计算得出的，但是该api存在bug，[具体链接](https://developers.weixin.qq.com/community/develop/doc/000aa2ed070a681ca1583206a50800)，目前解决的方案是通过setStorageSync存起来，如果获取不到就去缓存中拿第一次存的值，如果发现高度出现问题请查看缓存的key是否被覆盖。

2. 该组件的定位是fixed定位，但是微信小程序在iphone XS MAX上fixed定位的元素层级有问题，[具体链接](https://developers.weixin.qq.com/community/develop/doc/000c8ee59a84d8d7d8883485359c00)，如果发现导航栏无法覆盖具有旋转动画的元素时，请去社区找官方求助，官方给我的答复并不能解决这个问题。。。

3. input的placeholder层级问题，这个问题从微信小程序出现就有，之前好像是修复了，但是最近又出现了，[具体链接](https://developers.weixin.qq.com/community/develop/doc/0000e6fa1f4d70e32158c55b45b400?highLine=input%2520placeholder)，我在自己测试的时候是发现是无法遮盖住input的placeholder的，只能等待官方修复了。
:::