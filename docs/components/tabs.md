---
title: 标签页 Tabs
---

# 加载 Loading
### 引入组件

```json
{
  "usingComponents": {
    "ac-tabs": "@csr/awesome_components/components/tabs/tabs",
    "ac-tabs-panel": "@csr/awesome_components/components/tabs-panel/tabs-panel"
  }
}
```

```html
<ac-tabs default-active="{{0}}">
  <ac-tabs-panel title="标题一">内容一</ac-tabs-panel>
  <ac-tabs-panel title="标题二">内容二</ac-tabs-panel>
  <ac-tabs-panel title="标题三">内容三</ac-tabs-panel>
</ac-tabs>
```

### 基础用法

```html
<ac-tabs default-active="{{0}}">
  <ac-tabs-panel title="标题一">内容一</ac-tabs-panel>
  <ac-tabs-panel title="标题二">内容二</ac-tabs-panel>
  <ac-tabs-panel title="标题三">内容三</ac-tabs-panel>
</ac-tabs>
```

### 开启切换动画

```html
<ac-tabs default-active="{{0}}" animated>
  <ac-tabs-panel title="标题一">内容一</ac-tabs-panel>
  <ac-tabs-panel title="标题二">内容二</ac-tabs-panel>
  <ac-tabs-panel title="标题三">内容三</ac-tabs-panel>
</ac-tabs>
```

### 滑动切换

```html
<ac-tabs default-active="{{0}}" animated swipeable>
  <ac-tabs-panel title="标题一">内容一</ac-tabs-panel>
  <ac-tabs-panel title="标题二">内容二</ac-tabs-panel>
  <ac-tabs-panel title="标题三">内容三</ac-tabs-panel>
</ac-tabs>
```
### 多个tab会自动开启头部可滑动

```html
<ac-tabs default-active="{{0}}" animated swipeable>
  <ac-tabs-panel title="标题一">内容一</ac-tabs-panel>
  <ac-tabs-panel title="标题二">内容二</ac-tabs-panel>
  <ac-tabs-panel title="标题三">内容三</ac-tabs-panel>
  <ac-tabs-panel title="标题四">内容四</ac-tabs-panel>
  <ac-tabs-panel title="标题五">内容五</ac-tabs-panel>
  <ac-tabs-panel title="标题六">内容六</ac-tabs-panel>
  <ac-tabs-panel title="标题七">内容七</ac-tabs-panel>
  <ac-tabs-panel title="标题八">内容八</ac-tabs-panel>
  <ac-tabs-panel title="标题九">内容九</ac-tabs-panel>
</ac-tabs>
```
### 禁用某一项

```html
<ac-tabs default-active="{{0}}" animated swipeable>
  <ac-tabs-panel title="标题一">内容一</ac-tabs-panel>
  <ac-tabs-panel title="标题二" disabled>内容二</ac-tabs-panel>
  <ac-tabs-panel title="标题三">内容三</ac-tabs-panel>
  <ac-tabs-panel title="标题四" disabled>内容四</ac-tabs-panel>
</ac-tabs>
```

### API
#### tabs
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| default-active | Number | 默认选中tab下标 | 0
| animated | Boolean | 是否开启切换动画 | false
| swipeable | Boolean | 是否开启滑动切换 | false

#### tabs-panel
| 属性 | 类型 | 说明 | 默认值 |
| :---: | :----: | :----: | :----: |
| title | string |tab标题 |
| disabled | Boolean | 是否禁用 | false

### 事件
| 事件名  | 说明 | 参数 |
| :---: | :----: | :----: |
| onclick | 点击tab时触发， `event.detail = {title: 点击tab的title, index: 点击tab的下标}` | event: Event
| onchange | 滑动改变tab时触发， `event.detail = {title: 当前选中tab的title, index: 当前选中tab的下标}` | event: Event