---
title: 弹窗 Dialog
---

# 弹窗 Dialog
### 引入组件

```json
{
  "usingComponents": {
    "ac-dialog": "@csr/awesome_components/components/dialog/dialog"
  }
}
```

```html
<ac-dialog
  bindonclose="onTap" bindoncancel="onTap" bindonconfirm="onTap" 
  visible="{{visible}}" title="初春饰利" content="甜食是装在另一个胃里的"></ac-dialog>

<button type="primary" bindtap="onTap" size="mini">
  点我
</button>
```

```js
Page({
  data: {
    visible: false,
  },
  onTap(e) {
    this.setData({
      visible: !this.data.visible
    })
  }
})
```

### 基础用法
```html
<ac-dialog
  bindonclose="onTap" bindoncancel="onTap" bindonconfirm="onTap" 
  visible="{{visible}}" title="初春饰利" content="甜食是装在另一个胃里的"></ac-dialog>

<button type="primary" bindtap="onTap" size="mini">
  点我
</button>
```

```js
Page({
  data: {
    visible: false,
  },
  onTap(e) {
    this.setData({
      visible: !this.data.visible
    })
  }
})
```

### 自定义按钮文案
```html
<ac-dialog
  confirm-desc="知道了" cancel-desc="退下"
  bindonclose="onTap" bindoncancel="onTap" bindonconfirm="onTap" 
  visible="{{visible}}" title="初春饰利" content="甜食是装在另一个胃里的"></ac-dialog>

<button type="primary" bindtap="onTap" size="mini">
  点我
</button>
```

```js
Page({
  data: {
    visible: false,
  },
  onTap(e) {
    this.setData({
      visible: !this.data.visible
    })
  }
})
```

### 无标题
```html
<ac-dialog
  bindonclose="onTap" bindoncancel="onTap" bindonconfirm="onTap" 
  visible="{{visible}}" content="甜食是装在另一个胃里的"></ac-dialog>

<button type="primary" bindtap="onTap" size="mini">
  点我
</button>
```

```js
Page({
  data: {
    visible: false,
  },
  onTap(e) {
    this.setData({
      visible: !this.data.visible
    })
  }
})
```

### 隐藏取消按钮
```html
<ac-dialog
  visible-cancel-btn="{{false}}"
  bindonclose="onTap" bindoncancel="onTap" bindonconfirm="onTap" 
  visible="{{visible}}" content="甜食是装在另一个胃里的"></ac-dialog>

<button type="primary" bindtap="onTap" size="mini">
  点我
</button>
```

```js
Page({
  data: {
    visible: false,
  },
  onTap(e) {
    this.setData({
      visible: !this.data.visible
    })
  }
})
```

### 隐藏关闭图标
```html
<ac-dialog
  visible-close-icon="{{false}}"
  bindonclose="onTap" bindoncancel="onTap" bindonconfirm="onTap" 
  visible="{{visible}}" content="甜食是装在另一个胃里的"></ac-dialog>

<button type="primary" bindtap="onTap" size="mini">
  点我
</button>
```

```js
Page({
  data: {
    visible: false,
  },
  onTap(e) {
    this.setData({
      visible: !this.data.visible
    })
  }
})
```

### 自定义弹窗
```html
<ac-dialog visible="{{visible}}" visible-footer="{{false}}">
  <image src="xxx.jpg" mode="widthFix"/>
  <button
    size="default" type="warn" bindtap="onTap">点我关闭</button>
</ac-dialog>

<button type="primary" bindtap="onTap" size="mini">
  点我
</button>
```

```js
Page({
  data: {
    visible: false,
  },
  onTap(e) {
    this.setData({
      visible: !this.data.visible
    })
  }
})
```

### API
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| visible | Boolean | 是否展示弹窗 | false
| title | String | 弹窗标题 | 
| content | String | 弹窗内容 |
| confirm-desc | String | 确认按钮文案 | 确认
| cancel-desc | String | 取消按钮文案 | 取消
| visible-cancel-btn | Boolean | 是否展示取消按钮 | true
| visible-close-icon | Boolean | 是否展示关闭图标 | true
| visible-footer | Boolean | 是否显示按钮 | true
| z-index | string | 弹窗z-index值 | 1


### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onclose | 点击关闭图标时触发 | event: Event
| oncancel | 点击取消按钮时触发 | event: Event
| onconfirm | 点击确认按钮时触发 | event: Event

### slot

| 名称 | 说明 |
| :---: | :----: |
|  | 自定义弹窗内容 |