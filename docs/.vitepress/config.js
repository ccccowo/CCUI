import { defineConfig} from 'vitepress'

export default defineConfig({
  base:'/CCUI/',
  title: "CC-UI",
  description: "基于Vue3",
  // 网页图标
  head:[
    ['link',{rel:'icon',href:'../CCUI_logo.png'}]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南', link: '/guide/install'
      },
      { text: '组件', link: '/components/Button' 
    }
    ],
    sidebar: {
      "/components/": [
        {
          text: '通用',
          items: [
            {
              text: 'Button 按钮',
              link: 'components/Button'
            }
          ]
        },
        {
          text: '布局',
          items: [
            {
              text: 'Space 间距',
              link: 'components/Space'
            }
          ]
        },
        {
          text: '导航',
          items: [
            {
              text: 'Menu 菜单',
              link: 'components/Menu'
            }
          ]
        },
        {
          text: '数据录入',
          items: [
            {
              text: 'Input 输入框',
              link: 'components/Input'
            },
            {
              text: 'Radio 单选框',
              link: 'components/Radio'
            },
            {
              text: 'Checkbox 复选框',
              link: 'components/Checkbox'
            },
            {
              text: 'Switch 开关',
              link: 'components/Switch'
            },
            {
              text: 'Upload 上传',
              link: 'components/Upload'
            },
            {
              text: 'Select 选择器',
              link: 'components/Select'
            }
          ]
        },
        {
          text: '数据展示',
          items: [
            {
              text: 'Avatar 头像',
              link: 'components/Avatar'
            },
            {
              text: 'Card 卡片',
              link: 'components/Card'
            },
            {
              text: 'Carousel 走马灯',
              link: 'components/Carousel'
            },
            {
              text: 'Calendar 日历',
              link: 'components/Calendar'
            },
            {
              text: 'Table 表格',
              link: 'components/Table'
            },
          ]
        },
        {
          text: '反馈',
          items: [
            {
              text: 'Dialog 对话',
              link: 'components/Dialog'
            },
            {
              text: 'Popover 气泡卡片',
              link: 'components/Popover'
            },
            {
              text: 'Progress 进度条',
              link: 'components/Progress'
            },
          ]
        }
      ],
      "/guide/": [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guide/install'
            },
            {
              text: '快速上手',
              link: '/guide/quick-start'
            }
          ]
        }
      ]
    },
    footer: {
      message: 'Created by ccccowo ©2024'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ccccowo/CCUI' }
    ]
  }
})
