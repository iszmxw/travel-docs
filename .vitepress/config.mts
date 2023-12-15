import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/travel-docs/', // 设置站点根路径
  outDir: './docs', // 打包输出目录
  title: "TravelDocs",
  description: "A TravelProject Docs",
  themeConfig: {
    logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
  
    sidebar: sidebarGuide(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/iszmxw/travel-project' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: '561a8916c17b05fde8b50071ed1e6910',
        indexName: 'travel-docs'
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }
  }
})



function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/markdown/about', activeMatch: '/markdown/' },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/iszmxw/travel-project/commits/main/'
        }
      ]
    }
  ]
}

/* prettier-ignore */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '披荆斩棘',
      items: [
        { text: 'Let\'s go', link: '/markdown/index' }
      ]
    }
  ]
}