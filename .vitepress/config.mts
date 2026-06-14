// Version: 3.16.3 - 优化手机端按键比例：减小气泡宽度，增大垂直间距
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 1. 彻底禁用深色模式功能
  appearance: false,

  // 🌟 [标题修正] 严格设置站点名称与标签页模板
  title: "8972 资源站",
  titleTemplate: "专注影视音乐绿色软件资源分享", 
  
  // 🌟 [SEO 优化] 极致描述：平衡 PC 与移动端权重
  description: "8972资源站(89729981.xyz)提供全双端资源分享。我们不仅专注于安卓影视与苹果iOS影视APP分享，更涵盖高品质PC端音乐软件、Windows系统镜像及装机必备绿色软件下载。所有资源人工实测，打造纯净、极速的 PC 与移动端资源共享环境。",
  
  lang: 'zh-CN',
  cleanUrls: true,

  // 🌟 [SEO 优化] 开启自动 Sitemap 生成
  sitemap: {
    hostname: 'https://89729981.xyz',
    lastmodDateOnly: false
  },

  // 页面标识钩子：区分首页与子页
  async transformPageData(pageData) {
    if (pageData.relativePath === 'index.md') {
      pageData.frontmatter.pageClass = 'is-home-page'
    } else {
      pageData.frontmatter.pageClass = 'is-sub-page'
    }
  },

  head: [
    ['script', { defer: true, src: 'https://um.ayang.nyc.mn/script.js', 'data-website-id': '8a450346-99be-4090-bbf7-7dd74a7d428a' }],
    ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 dominant-baseline=%22central%22 text-anchor=%22middle%22 font-size=%2280%22>☁️</text></svg>' }],
    
    // 🌟 [SEO 补救] 明确告知百度双端适配，防止 PC 端搜不到
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    
    // 🌟 [SEO 优化] 核心 Meta 标签矩阵
    ['meta', { name: 'keywords', content: '8972资源站,资源分享,绿色资源,安卓影视,ios影视,苹果影视,音乐软件,电脑软件,手机壁纸,免费资源,89729981.xyz' }],
    ['meta', { name: 'author', content: '8972 资源站' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['link', { rel: 'canonical', href: 'https://89729981.xyz/' }],
    
    // 🌟 [SEO 优化] Open Graph (社交分享优化)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '8972 资源站 | 专注影视音乐绿色软件资源分享' }],
    ['meta', { property: 'og:description', content: '8972资源站提供安卓影视、ios影视、绿色资源及免费软件分享。' }],
    ['meta', { property: 'og:url', content: 'https://89729981.xyz/' }],
    ['meta', { property: 'og:site_name', content: '8972 资源站' }],

    // 🌟 [SEO 优化] JSON-LD 结构化数据：强行喂给百度 PC 蜘蛛
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://89729981.xyz/",
        "name": "8972资源站",
        "description": "专注影视音乐及电脑装机软件绿色资源分享",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://89729981.xyz/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    ],

    ['style', {}, `
      /* 🌟 [1] 全站净化与基础重置 */
      ::-webkit-scrollbar { display: none; }
      * { scrollbar-width: none; -ms-overflow-style: none; }
      .VPNavBarAppearance, .VPNavBarHamburger { display: none !important; }
      
      /* 彻底粉碎返回顶部残留 */
      .VPReturnToTop, .VPLocalNav .top-link, .VPLocalNav .outline-link { 
        display: none !important; 
        width: 0 !important; 
        height: 0 !important; 
        overflow: hidden !important; 
      }

      /* 🌟 [2] 强力抹除页脚导航 */
      .VPDocFooter { display: none !important; visibility: hidden !important; }

      /* 🌟 [3] 手机端侧边栏宽度强行锁定 (170px 窄版) */
      @media (max-width: 959px) {
        .VPSidebar {
          width: 170px !important;
          max-width: 170px !important;
          transform: translateX(-170px);
        }
        .VPSidebar.open {
          transform: translateX(0) !important;
        }
      }

      /* 🌟 [4] 手机端子页标题设计 */
      @media (max-width: 959px) {
        .is-sub-page .VPNavBarTitle .title::after {
          content: " 👈返回首页";
          display: inline-block;
          font-size: 11px;
          font-weight: normal;
          color: #e11d48;
          margin-left: 6px;
          vertical-align: middle;
        }
        @media (max-width: 380px) {
          .is-sub-page .VPNavBarTitle .title { font-size: 14px !important; }
        }
      }

      /* 🌟 [5] PC 端彻底隐藏子页返回提示 */
      @media (min-width: 960px) {
        .is-sub-page .VPNavBarTitle .title::after { display: none !important; }
      }

      /* 🌟 [6] 首页布局逻辑 (修复塌陷，极简宽气泡) */
      .is-home-page .VPHome {
        margin: 0 !important;
        padding: 0 !important;
        width: 100vw !important;
        min-height: calc(100vh - var(--vp-nav-height)) !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
      }
      .is-home-page .VPHero { display: none !important; }

      /* 核心修复：强行将网格容器宽度撑满 100%，防止被挤压成竖条 */
      .is-home-page .VPFeatures,
      .is-home-page .VPFeatures .container {
        width: 100% !important;
        padding: 0 !important;
        margin: 0 auto !important;
        display: block !important;
      }

      /* 核心：强制开启双列网格 */
      .is-home-page .VPFeatures .items {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important; /* 稳稳的两列 */
        width: 100% !important;
        max-width: 800px !important; /* 极简气泡不用拉太宽，聚焦居中 */
        margin: 0 auto !important;
        gap: 24px 20px !important; /* 垂直间距默认拉开到 24px */
        padding: 0 20px !important;
      }

      /* 防止子项塌陷 */
      .is-home-page .VPFeatures .item {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .is-home-page .VPFeature {
        width: 100% !important;
        border: 1px solid var(--vp-c-divider) !important;
        background-color: var(--vp-c-bg-soft) !important;
        border-radius: 16px !important;
        display: block !important;
        transition: border-color 0.25s, background-color 0.25s !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      .is-home-page .VPFeature:hover {
        border-color: var(--vp-c-brand) !important;
      }

      /* 气泡盒子对齐设定 */
      .is-home-page .VPFeature .box {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        padding: 0 !important; 
        margin: 0 !important;
        white-space: nowrap !important;
      }
      
      .is-home-page .VPFeature .title { 
        font-weight: 800 !important; 
        margin: 0 !important; 
      }
      
      /* 强制极简：彻底隐藏图标和多余的描述文字 */
      .is-home-page .VPFeature .icon, 
      .is-home-page .VPFeature .details { 
        display: none !important; 
      }

      /* 💻 电脑端布局 */
      @media (min-width: 960px) {
        .VPNavBarMenu { display: none !important; }
        .is-home-page .VPNavBarSearch {
          flex-grow: 1 !important;
          display: flex !important;
          justify-content: flex-end !important;
        }

        /* 👇 就是加下面这一段，专门控制电脑端气泡的宽度 👇 */
        .is-home-page .VPFeatures .items { 
          max-width: 600px !important; /* 👈 修改这里！默认是800px。改成600px气泡就会变窄，改成1000px就会变宽 */
          gap: 50px 40px !important;
        }

        .is-home-page .VPFeature .box {
          height: 90px !important; /* PC 端气泡高度 */
        }
        .is-home-page .VPFeature .title { font-size: 24px !important; }
      }

      /* 📱 手机端布局 (针对截图进行间距与宽度优化) */
      @media (max-width: 959px) {
      /* 👇 新增这一段：控制手机端整体向上对齐 👇 */
        .is-home-page .VPHome {
          justify-content: flex-start !important; /* 核心：从居中改为向上对齐 */
          padding-top: 40px !important;           /* 距离顶部导航栏的留白空间 */
        }
        .VPNavBarSearch {
          flex-grow: 1 !important;
          display: flex !important;
          justify-content: flex-end !important;
          padding-right: 0px !important;
          order: 10 !important; 
        }

        .is-home-page .VPFeatures .items {
          gap: 40px 30px !important;  /* 【核心修改】：垂直行间距增大到 24px，拉开上下距离 */
          padding: 0 50px !important; /* 【核心修改】：左右留白拉大到 36px，把按钮往中间挤压，变窄变精致 */
        }
        .is-home-page .VPFeature .box {
          height: 64px !important; /* 高度稍微收一点，配合变窄的宽度，比例才不会显得像方块 */
        }
        .is-home-page .VPFeature .title { font-size: 17px !important; }

        .is-sub-page .VPNavBarSocialLinks {
          display: flex !important;
          order: 5 !important;
          margin-right: 5px !important;
        }
        .is-sub-page .VPNavBarSocialLinks a {
          width: 32px !important;
        }
      }

      /* 🌟 [7] 社交链接显示控制 */
      .is-home-page .VPNavBarSocialLinks { display: none !important; }
      @media (min-width: 960px) {
        .is-sub-page .VPNavBarSocialLinks { 
          display: flex !important; 
          margin-right: 20px;
        }
      }

      .is-home-page .vp-doc, .is-home-page .VPFooter { display: none !important; }
    `]
  ],

  themeConfig: {
    logo: '☁️',
    siteTitle: '8972 资源站',
    outline: false,
    nav: [],
    sidebar: [
      {
        text: '🎬 影视分类',
        collapsed: false,
        items: [
          { text: '安卓影视 🔥', link: '/movie/v-android' },
          { text: '苹果影视', link: '/movie/v-ios' },
          { text: '影视网站', link: '/movie/v-sites' },
          { text: '电视 TV', link: '/movie/v-tv' },
        ]
      },
      {
        text: '🎵 音乐分类',
        collapsed: false,
        items: [
          { text: '安卓 Music', link: '/music/music-a' },
          { text: '电脑 Music', link: '/music/music-pc' }
        ]
      },
      {
        text: '📱 手机APP',
        collapsed: false,
        items: [
          { text: '安卓好软 💫', link: '/android/a-changyong' },
          { text: 'Root 相关', link: '/android/root' }
        ]
      },
      {
        text: '💻 电脑分类',
        collapsed: false,
        items: [
          { text: '电脑好软 🔥', link: '/pc/pc-changyong' },
          { text: '装机软件', link: '/pc/pc-install' },
        ]
      },
      {
        text: '🛸 其他资源',
        collapsed: false,
        items: [
          { text: '每日壁纸 🖼️', link: '/other/bizhi' },
          { text: '友情链接', link: '/other/others' }
        ]
      }
    ],

    // 🌟 [社交矩阵] 顺序：哔哩哔哩、小红书、抖音、YouTube
    socialLinks: [
      { 
        icon: { svg: '<svg viewBox="0 0 24 24"><text x="0" y="18" font-size="20">📺</text></svg>' }, 
        link: 'https://space.bilibili.com/161365760' 
      },
      { 
        icon: { svg: '<svg viewBox="0 0 24 24"><text x="0" y="18" font-size="20">📕</text></svg>' }, 
        link: 'https://www.xiaohongshu.com/user/profile/69781fd2000000001d01ad88' 
      },
      { 
        icon: { svg: '<svg viewBox="0 0 24 24"><text x="0" y="18" font-size="20">🎵</text></svg>' }, 
        link: 'https://v.douyin.com/zbT67CNeNW0/' 
      },
      { 
        icon: { svg: '<svg viewBox="0 0 24 24"><text x="0" y="18" font-size="20">▶️</text></svg>' }, 
        link: 'https://www.youtube.com/@AooHu' 
      }
    ],

    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    docFooter: false, 

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: (str) => str.split(/[\s,.-]+|(?<=[\u4e00-\u9fa5])|(?=[\u4e00-\u9fa5])/).filter(Boolean)
          },
          searchOptions: {
            fuzzy: 0.2, 
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 } 
          }
        },
        translations: {
          button: { buttonText: '搜索资源...' },
          modal: {
            noResultsText: '无法找到相关资源',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    }
  }
})