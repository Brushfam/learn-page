const lightCodeTheme = require('prism-react-renderer/themes/vsLight')
const darkCodeTheme = require('prism-react-renderer/themes/vsDark')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Brushfam',
  tagline: 'Documentation',
  url: 'https://learn.brushfam.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: '727-Ventures',
  projectName: 'learn-page',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      logo: {
        alt: 'Brushfam',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: 'https://brushfam.io'
      },
      items: [
        {
          href: 'https://twitter.com/brushfam_io',
          className: 'header-twitter-link',
          position: 'right'
        },
        {
          href: 'https://github.com/727-Ventures/openbrush-contracts',
          className: 'header-github-link',
          position: 'right'
        }
      ]
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Brushfam`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['toml', 'rust']
    }
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')]
        }
      }
    ]
  ]
}
