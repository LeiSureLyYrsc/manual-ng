import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'LittleSkin 用户使用手册',
  description: 'LittleSkin 用户使用手册',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],

  lastUpdated: true,
  sitemap: {
    hostname: 'https://manual.littlesk.in'
  },

  lang: 'zh',
  appearance: true,

  markdown: {
    theme: { light: 'catppuccin-latte', dark: 'one-dark-pro' },
  },

  cleanUrls: true,

  themeConfig: {
    logo: '/favicon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '返回 LittleSkin', link: 'https://littlesk.in/' },
      { text: '社区支持机器人', link: 'https://bot-manual.commspt.littlesk.in/' },
      { text: '捐助支持', link: 'https://afdian.net/a/tnqzh123' }
    ],

    locales: {
      root: {
        label: '中文',
        lang: 'zh'
      },
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true,
    lastUpdated: {
      text: '上次更新于'
    },
    outline: {
      'label': '在此页面上'
    },
    editLink: {
      pattern: 'https://github.com/LittleSkinCommspt/manual-ng/edit/main/docs/:path',
      text: '帮助我们完善这个页面'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    sidebar: {
      '/': [
        {
          text: '用户使用手册',
          link: '/',
          items: [
            {
              text: '政策条款',
              link: '/policies/',
              items: [
                { text: '用户服务条款', link: '/policies/tos' },
                { text: '隐私声明', link: '/policies/privacy' }
              ]
            },
            {
              text: '新手指引',
              link: '/newbee/',
              items: [
                { text: '创建角色', link: '/newbee/player' },
                { text: '设定材质', link: '/newbee/textures' },
                { text: '配置 Mod', link: '/newbee/mod' }
              ]
            },
            {
              text: '高级功能',
              link: '/advanced/',
              items: [
                { text: 'Yggdrasil', link: '/advanced/yggdrasil' },
                { text: 'OAuth 2', link: '/advanced/oauth2' },
                { text: 'LittleSkin API', link: '/advanced/api' },
              ]
            },
            {
              text: 'Yggdrasil 外置登录',
              link: '/yggdrasil/',
              items: [
                { text: '配置客户端', link: '/yggdrasil/client' },
                { text: '配置服务端', link: '/yggdrasil/server' }
              ]
            },
            { text: '积分系统', link: '/score' },
            { text: '常见问题解答', link: '/faq' },
            { text: '报告问题的正确姿势', link: '/report' },
            { text: '邮件工单', link: '/email' },
            { text: '用户交流群', link: '/user-group' }
          ]
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleSkinCommspt/manual-ng' },
    ],

  },
  vite: {
    ssr: {
      noExternal: [
        // If there are other packages that need to be processed by Vite, you can add them here.
        '@nolebase/vitepress-plugin-enhanced-readabilities',
        '@nolebase/vitepress-plugin-highlight-targeted-heading',
      ],
    },
  },
});
