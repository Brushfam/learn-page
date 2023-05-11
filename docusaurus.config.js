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
  favicon: 'img/favicon.ico',
  organizationName: '727-Ventures',
  projectName: 'learn-page',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'Brushfam',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: 'https://brushfam.io',
        target: '_self',
      },
      items: [
        {
          label: "Twitter",
          to: 'https://twitter.com/Brushfam_io',
          className: 'header-twitter-link',
          position: 'right'
        },
        {
          label: "Discord",
          to: 'https://discord.gg/9FRETSPmp9',
          className: 'header-discord-link',
          position: 'right'
        },
        {
          label: "Element",
          to: 'https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation',
          className: 'header-element-link',
          position: 'right'
        },
        {
          label: "Medium",
          to: 'https://medium.com/brushfam',
          className: 'header-medium-link',
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
  plugins: ['docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: 'tutorials',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')]
        }
      }
    ]
  ]
}
