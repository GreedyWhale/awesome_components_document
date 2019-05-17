---
title: 时间线 Timeline
---

# 时间线 Timeline
### 引入组件

```css
/* 具体路径要看当前文件所在位置 */
@import '../../miniprogram_npm/@csr/awesome_components/wxss/timeline/timeline.wxss';
```

```html
<view class="ac-timeline-wrapper">
  <view class="ac-timeline-title">第一天</view>
  <view class="ac-timeline-content-wrapper">
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon jiqing"></view>
      </view>
      <view class="ac-timeline-content jiqing">创建角色</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon lanlv"></view>
      </view>
      <view class="ac-timeline-content lanlv">等级提升至15级</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon diehuang"></view>
      </view>
      <view class="ac-timeline-content diehuang">加入工会</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon meijianghong"></view>
      </view>
      <view class="ac-timeline-content meijianghong">通关简单副本</view>
      <view class="ac-timeline-content meijianghong">通关简单副本</view>
      <view class="ac-timeline-content meijianghong">通关简单副本</view>
    </view>
  </view>

  <view class="ac-timeline-title">第二天</view>
  <view class="ac-timeline-content-wrapper">
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon liuzihong"></view>
      </view>
      <view class="ac-timeline-content liuzihong">找到固定队友</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon wenpochuan"></view>
      </view>
      <view class="ac-timeline-content wenpochuan">等级提升至30级</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon xiancaizi"></view>
      </view>
      <view class="ac-timeline-content xiancaizi">成功拜师</view>
    </view>
    <view class="ac-timeline-content-item">
      <view class="ac-timeline-icon-wrapper">
        <view class="ac-timeline-icon dianqing"></view>
      </view>
      <view class="ac-timeline-content dianqing">通关困难副本</view>
      <view class="ac-timeline-content dianqing">通关困难副本</view>
      <view class="ac-timeline-content dianqing">通关困难副本</view>
    </view>
  </view>
</view>
```

:::tip
该组件是一个wxss文件，只要按照例子中的html结构 + 对应的class名即可
:::

