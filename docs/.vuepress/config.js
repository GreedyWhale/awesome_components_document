module.exports = {
  base: '/awesome_components_document/',
  title: 'Awesome components',
  description: '一个集合了小程序中常用的组件及动画的库',
  themeConfig: {
    nav: [
      { text: '指南', link: '/introduction/introduce' },
      { text: 'GitHub', link: 'https://github.com/GreedyWhale/awesome_components' }
    ],
    sidebar: [
      {
        title: '快速上手',
        children: [
          '/introduction/introduce',
          '/introduction/install',
          '/introduction/usage'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/avatar',
          '/components/loading',
          '/components/tabs',
          '/components/watermark',
          "/components/timeline",
          '/components/progress',
          '/components/dialog',
          '/components/navBar',
          '/components/verticalNavigation',
          '/components/noticeBar',
          '/components/numberSelector',
          '/components/steps',
          '/components/slideView',
          '/components/sticky',
          '/components/giveLike',
        ]
      },
      '/animate/'
    ]
  }
}