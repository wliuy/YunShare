// Version: 4.0.0 - 桌面/手机端按浏览器尺寸自适应，SEO 域名统一为 zy.89729981.xyz
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
    hostname: 'https://zy.89729981.xyz',
    lastmodDateOnly: false
  },

  // 排除根目录 README.md：避免被当页面构建进站点和 sitemap
  srcExclude: ['README.md'],

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
    ['link', { rel: 'canonical', href: 'https://zy.89729981.xyz/' }],
    
    // 🌟 [SEO 优化] Open Graph (社交分享优化)
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '8972 资源站 | 专注影视音乐绿色软件资源分享' }],
    ['meta', { property: 'og:description', content: '8972资源站提供安卓影视、ios影视、绿色资源及免费软件分享。' }],
    ['meta', { property: 'og:url', content: 'https://zy.89729981.xyz/' }],
    ['meta', { property: 'og:site_name', content: '8972 资源站' }],

    // 🌟 [SEO 优化] JSON-LD 结构化数据：强行喂给百度 PC 蜘蛛
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://zy.89729981.xyz/",
        "name": "8972资源站",
        "description": "专注影视音乐及电脑装机软件绿色资源分享",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://zy.89729981.xyz/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    ],

    ['style', {}, `
      /* 🌟 [1] 全站净化与基础重置 */
      ::-webkit-scrollbar { display: none; }
      * { scrollbar-width: none; -ms-overflow-style: none; }
      .VPNavBarHamburger { display: none !important; }
      
      /* 彻底粉碎返回顶部残留 */
      .VPReturnToTop, .VPLocalNav .top-link, .VPLocalNav .outline-link { 
        display: none !important; 
        width: 0 !important; 
        height: 0 !important; 
        overflow: hidden !important; 
      }

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
        justify-content: flex-start !important;
        align-items: center !important;
      }

      /* 🌟 [6.1] 底部平台入口条：导航站 / 博客站 / 四个社交平台（跟随卡片下方，纯文字链接） */
      .is-home-page .VPHero {
        display: flex !important;
        justify-content: center !important;
        padding: 32px 0 48px !important;
        margin: 0 !important;
        order: 10 !important;
      }
      .is-home-page .VPHero .container {
        max-width: 100% !important;
        padding: 0 !important;
        display: block !important;
      }
      .is-home-page .VPHero .main {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        width: 100% !important; /* 覆盖默认 2/3 宽，保证按钮真正居中 */
      }
      .is-home-page .VPHero .text,
      .is-home-page .VPHero .name,
      .is-home-page .VPHero .tagline,
      .is-home-page .VPHero .image { display: none !important; }
      .is-home-page .VPHero .actions {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: wrap !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 4px 26px !important;
        margin: 0 !important;
        width: 100% !important;
      }
      .is-home-page .VPHero .actions .action {
        margin: 0 !important;
        padding: 0 !important;
      }
      /* 两行布局：第 3 个后强制换行（上面 3 个网址，下面 4 个平台） */
      .is-home-page .VPHero .actions .action:nth-child(3) { order: 1 !important; }
      .is-home-page .VPHero .actions .action:nth-child(n+4) { order: 3 !important; }
      .is-home-page .VPHero .actions::after {
        content: "" !important;
        order: 2 !important;
        flex: 0 0 100% !important;
        height: 0 !important;
        margin: 0 !important;
      }
      /* 纯文字链接：去掉气泡底色与边框 */
      .is-home-page .VPHero .VPButton {
        white-space: nowrap !important;
        height: auto !important;
        padding: 0 !important;
        font-size: 15px !important;
        font-weight: 500 !important;
        border-radius: 0 !important;
        border: none !important;
        background: transparent !important;
        color: var(--vp-c-text-2) !important;
        transition: color 0.2s !important;
      }
      .is-home-page .VPHero .VPButton:hover {
        color: var(--vp-c-brand-1) !important;
        transform: none !important;
        box-shadow: none !important;
      }

      /* 核心修复：强行将网格容器宽度撑满 100%，防止被挤压成竖条
         margin: auto 让卡片组吸收剩余垂直空间，实现「公告条置顶、卡片组在其下方垂直居中」 */
      .is-home-page .VPFeatures,
      .is-home-page .VPFeatures .container {
        width: 100% !important;
        padding: 0 !important;
        margin: auto !important;
        display: block !important;
      }

      /* 核心：强制开启双列网格（间距由桌面/手机断点分别覆盖） */
      .is-home-page .VPFeatures .items {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important; /* 稳稳的两列 */
        width: 100% !important;
        max-width: 800px !important; /* 极简气泡不用拉太宽，聚焦居中 */
        margin: 0 auto !important;
        padding: 0 20px !important;
      }

      /* 防止子项塌陷 */
      .is-home-page .VPFeatures .item {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      /* 🌟 新卡片设计：圆角图标 + 标题 现代卡片 */
      .is-home-page .VPFeature {
        width: 100% !important;
        border: 1px solid var(--vp-c-divider) !important;
        background: linear-gradient(180deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg) 100%) !important;
        border-radius: 14px !important;
        display: block !important;
        margin: 0 !important;
        padding: 0 !important;
        transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s !important;
      }
      .is-home-page .VPFeature:hover {
        border-color: var(--vp-c-brand-1) !important;
        transform: translateY(-3px) !important;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.10) !important;
      }
      .is-home-page .VPFeature .box {
        position: relative !important;
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: center !important; /* 气泡内容（图标+文字）整体居中 */
        gap: 14px !important;
        width: 100% !important;
        height: 100% !important;
        padding: 18px 20px !important;
        margin: 0 !important;
      }
      .is-home-page .VPFeature .icon {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        flex-shrink: 0 !important;
        width: 46px !important;
        height: 46px !important;
        border-radius: 12px !important;
        background: var(--vp-c-brand-soft) !important;
        font-size: 22px !important;
        margin: 0 !important;
      }
      .is-home-page .VPFeature .title {
        font-weight: 700 !important;
        font-size: 17px !important;
        margin: 0 !important;
        white-space: nowrap !important;
      }
      /* 右侧箭头：hover 淡入 */
      .is-home-page .VPFeature .box::after {
        content: "→" !important;
        position: absolute !important;
        right: 14px !important;
        top: 50% !important;
        transform: translateY(-50%) !important;
        color: var(--vp-c-brand-1) !important;
        font-size: 18px !important;
        font-weight: 700 !important;
        opacity: 0 !important;
        transition: opacity 0.2s, transform 0.2s !important;
      }
      .is-home-page .VPFeature:hover .box::after {
        opacity: 1 !important;
        transform: translateY(-50%) translateX(3px) !important;
      }
      /* 保留 details 隐藏（SEO 抓取） */
      .is-home-page .VPFeature .details { display: none !important; }

      /* 💻 电脑端布局 */
      @media (min-width: 960px) {
        .VPNavBarMenu { display: none !important; }
        .is-home-page .VPHome {
          padding-top: 0 !important;
          justify-content: flex-start !important;   /* 公告条紧贴顶部，卡片组靠 auto margin 在下半区垂直居中 */
        }
        .is-home-page .VPNavBarSearch {
          flex-grow: 1 !important;
          display: flex !important;
          justify-content: flex-end !important;
        }

        /* 👇 PC 端卡片间距与宽度 👇
           宽度 = max-content：按所有气泡里最宽内容定宽，不再拉伸填满；
           repeat(4, 1fr)：4 列均分网格宽度，保证每个气泡严格等宽 */
        .is-home-page .VPFeatures .items { 
          max-width: none !important;
          width: max-content !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 20px 20px !important;
        }
        /* 气泡变窄后，右侧 hover 箭头会与文字重叠，桌面端一并去掉 */
        .is-home-page .VPFeature .box::after { display: none !important; }

        /* 中高窗口（850~950）适当收紧，避免滚动 */
        @media (max-height: 950px) {
          .is-home-page .VPHome { padding-top: 0 !important; }
          .is-home-page .VPFeatures .items { gap: 14px 20px !important; }
          .is-home-page .VPFeature .box { padding: 14px 16px !important; }
          .is-home-page .VPHero { padding: 24px 0 36px !important; }
        }
        /* 矮窗口（≤850，如 1280x800 / 1366x768）进一步压缩，尽量一屏放下 */
        @media (max-height: 850px) {
          .is-home-page .VPHome { padding-top: 0 !important; }
          .is-home-page .VPFeatures .items { gap: 10px 16px !important; }
          .is-home-page .VPFeature .box { padding: 10px 12px !important; gap: 12px !important; }
          .is-home-page .VPFeature .icon { width: 38px !important; height: 38px !important; font-size: 18px !important; }
          .is-home-page .VPFeature .title { font-size: 15px !important; }
          .is-home-page .VPHero { padding: 16px 0 24px !important; }
          .is-home-page .VPHero .VPButton { font-size: 14px !important; }
        }
      }

      /* 📱 手机端布局 (针对截图进行间距与宽度优化) */
      @media (max-width: 959px) {
      /* 👇 手机端整体垂直居中：空白在上下均分，不再集中在底部一大片 👇 */
        .is-home-page .VPHome {
          justify-content: flex-start !important;      /* 公告条紧贴顶部，卡片组往下垂直居中 */
          min-height: calc(100vh - var(--vp-nav-height)) !important;
        }
        .VPNavBarSearch {
          flex-grow: 1 !important;
          display: flex !important;
          justify-content: flex-end !important;
          padding-right: 0px !important;
          order: 10 !important; 
        }

        .is-home-page .VPFeatures .items {
          max-width: none !important;
          width: max-content !important;                  /* 按最宽内容定宽，气泡不再拉伸 */
          grid-template-columns: repeat(2, 1fr) !important; /* 2 列均分，所有气泡等宽 */
          gap: 20px 20px !important;  /* 手机端行列同距，横向间隔与纵向一致 */
          padding: 0 !important;      /* 内容定宽后不再需要左右留白，靠 margin auto 居中 */
        }
        .is-home-page .VPFeature .box {
          gap: 10px !important;
          padding: 10px 14px !important;
        }
        .is-home-page .VPFeature .icon {
          width: 36px !important;
          height: 36px !important;
          border-radius: 9px !important;
          font-size: 18px !important;
        }
        .is-home-page .VPFeature .title { font-size: 14px !important; }
        .is-home-page .VPFeature .box::after { display: none !important; }

        .is-home-page .VPHero { padding: 24px 0 36px !important; }
        .is-home-page .VPHero .actions { gap: 4px 18px !important; }
        .is-home-page .VPHero .VPButton { font-size: 13px !important; }

        /* 中高屏（如 667~736 高度）适当收紧，保证一屏放下 */
        @media (max-height: 720px) {
          .is-home-page .VPFeatures .items { gap: 14px 14px !important; }
          .is-home-page .VPHero { padding: 18px 0 28px !important; }
        }

        /* 矮屏（老机型）进一步压缩，保证一屏放下 */
        @media (max-height: 620px) {
          .is-home-page .VPHome { padding-top: 0 !important; }
          .is-home-page .VPFeatures .items { gap: 6px 6px !important; }
          .is-home-page .VPFeature .box { padding: 6px 10px !important; gap: 8px !important; }
          .is-home-page .VPFeature .icon { width: 30px !important; height: 30px !important; font-size: 16px !important; }
          .is-home-page .VPFeature .title { font-size: 13px !important; }
          .is-home-page .VPHero { padding: 12px 0 16px !important; }
          .is-home-page .VPHero .actions { gap: 2px 14px !important; }
          .is-home-page .VPHero .VPButton { font-size: 12px !important; }
        }

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

      /* 🌟 [8] 修复内容页导航 hydration 闪动
         SSR 渲染的 VPNavBar 缺少 has-sidebar 类，刷新后类才加上 → 布局突变、搜索框跳位。
         这里让子页在 SSR 首帧就套用 has-sidebar 布局，杜绝闪动。 */
      @media (min-width: 960px) {
        .is-sub-page .VPNavBar .wrapper { padding: 0 !important; }
        .is-sub-page .VPNavBar .container { max-width: 100% !important; }
        .is-sub-page .VPNavBar .title:not(a) {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          z-index: 2 !important;
          padding: 0 32px !important;
          width: var(--vp-sidebar-width) !important;
          height: var(--vp-nav-height) !important;
          background-color: transparent !important;
        }
        .is-sub-page .VPNavBar .content {
          position: relative !important;
          z-index: 1 !important;
          padding-right: 32px !important;
          padding-left: var(--vp-sidebar-width) !important;
        }
        .is-sub-page .VPNavBar .divider { padding-left: var(--vp-sidebar-width) !important; }
      }
      @media (min-width: 1440px) {
        .is-sub-page .VPNavBar .title:not(a) {
          padding-left: max(32px, calc((100% - (var(--vp-layout-max-width) - 64px)) / 2)) !important;
          width: calc((100% - (var(--vp-layout-max-width) - 64px)) / 2 + var(--vp-sidebar-width) - 32px) !important;
        }
        .is-sub-page .VPNavBar .content {
          padding-right: calc((100vw - var(--vp-layout-max-width)) / 2 + 32px) !important;
          padding-left: calc((100vw - var(--vp-layout-max-width)) / 2 + var(--vp-sidebar-width)) !important;
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
          { text: '电视 TV', link: '/movie/v-tv' },
          { text: '影视网站', link: '/movie/v-sites' },
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
          { text: '动漫小说 📖', link: '/android/anime' },
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
          { text: '素材干货 📚', link: '/other/qita' },
          { text: '友情链接', link: '/other/friends' }
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