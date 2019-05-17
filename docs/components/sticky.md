---
title: 吸顶 Sticky
---

# 吸顶 Sticky
### 引入组件

```json
{
  "usingComponents": {
    "ac-sticky": "@csr/awesome_components/components/sticky/sticky"
  }
}
```

```html
<view wx:for="{{20}}" wx:key="{{index}}">content</view>
<ac-sticky scroll-top="{{scrollTop}}">
  <view class="sticky-elem">我是吸顶元素</view>
</ac-sticky>
<view wx:for="{{25}}" wx:key="{{index}}">content</view>
<ac-sticky scroll-top="{{scrollTop}}" distance="{{50}}">
  <view class="sticky-elem-second">我也是是吸顶元素</view>
</ac-sticky>
<view wx:for="{{50}}" wx:key="{{index}}">content</view>
```

```js
Page({
  data: {
    scrollTop: 0
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| scroll-top | Number | 页面滚动距离 |
| distance | Number | sticky定位的元素离顶部的距离 |

### slot

| 名称 | 说明 |
| :---: | :----: |
|  | 默认展示内容 |


::: warning
由于在scroll-view元素中实现Sticky定位存在性能问题，暂时只支持在页面中Sticky定位。
:::
