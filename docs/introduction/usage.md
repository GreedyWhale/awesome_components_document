---
title: 使用
---

1. 打开微信开发者工具[下载链接](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=19051714)

2. 创建你的小程序项目[教程](https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/getstart.html#%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%B0%8F%E7%A8%8B%E5%BA%8F)

3. 点击开发者工具中右上角的详情

4. 在详情的下方中有一个使用 npm 模块选项，选中它

5. 在开发者工具中上方菜单中有一个工具菜单，打开工具菜单，点击构建npm

6. 当出现完成构建弹窗时，表示构建成功，这时候你的项目中会出现一个miniprogram_npm目录

7. 引入组件
    - page.json
    ```json
    {
      "usingComponents": {
        "ac-avatar": "@csr/awesome_components/components/avatar/avatar"
      }
    }
    ```

    - page.wxml
    ```html
    <ac-avatar>头像</ac-avatar>
    ```


::: tip
如果构建失败，请查看项目中是否存在package.json文件，并且依赖的库在dependencies字段中
:::

