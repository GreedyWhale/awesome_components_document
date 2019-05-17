---
title: 滑块 SlideView
---

# 滑块 SlideView
### 引入组件

```json
{
  "usingComponents": {
    "ac-slide-view": "@csr/awesome_components/components/slide-view/slide-view"
  }
}
```

```html
<ac-slide-view height="100">
  <view slot="left" class="silde-view-left silde-view">左滑</view>
  <view slot="right" class="silde-view-right silde-view">删除</view>
</ac-slide-view>
```

```css
.silde-view {
  display: flex;
  align-items: center;
  padding: 20rpx;
  height: 100%;
  box-sizing: border-box;
}
.silde-view-left {
  background: #e9e9e9;
}
.silde-view-right {
  background: red;
  color: #fff;
}
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| height | String \| Number | 高度，单位rpx，不需要传递单位 | 80rpx

### slot

| 名称 | 说明 |
| :---: | :----: |
| left | 默认展示内容 |
| right | 滑动后展示内容 | 


::: tip
该组件的宽度默认撑满父元素的宽，如需指定宽度改变父元素宽度即可
:::