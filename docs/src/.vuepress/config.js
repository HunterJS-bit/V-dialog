const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'V-dialog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/getting-started.html#prerequisites',
      },
      {
        text: 'Github',
        link: 'https://github.com/HunterJS-bit/V-dialog'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          collapsable: false,
          children: [
            // '/guide/',
            '/guide/getting-started.md',
            '/guide/examples.md',
            '/guide/api.md',
            '/guide/events.md',
          ],
        },
      ],

    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['@vuepress/register-components', {
      components: [
        {
          name: 'v-dialog',
          path: '../../../lib/V-dialog.vue'
        }
      ]
    }],
    'demo-code'
  ]
}
