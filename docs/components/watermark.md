---
title: 水印生成器 Watermark
---

# 水印生成器 Watermark
### 引入组件

```json
{
  "usingComponents": {
    "ac-watermark": "@csr/awesome_components/components/watermark/watermark"
  }
}
```

```html
<ac-watermark></ac-watermark>
```

::: tip
  - 字体颜色支持css颜色名，十六进制颜色，rgba颜色，默认#FFFFFF
  - 水印文字可拖动，默认位置在图片的左上角
  - 字体大小单位px，默认32px
  - 生成之后的图片会调用wx.previewImage展示预览图片，这时候可长按图片进行保存等操作
:::