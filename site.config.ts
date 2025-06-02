import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://fengzhongchen.top',
  favicon: "favicon.svg",
  lang: 'zh-CN',
  title: '风中尘的博客',
  subtitle: '',
  author: {
    name: '风中尘',
    avatar: "https://avatars.githubusercontent.com/u/49940925?s=96&v=4",
    status: {
      emoji: ''
    },
  },
  description: '记录我遇到的问题和解决方案，以及一些有趣的事。',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/fengzhongchen',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/73657694',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:pinganyan@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: '', // 支付宝收款码图片链接
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: '', // QQ 收款码图片链接
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: '', // 微信收款码图片链接
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
