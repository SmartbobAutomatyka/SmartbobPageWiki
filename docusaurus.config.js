// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SmartBob — Dokumentacja',
  tagline: 'Pomoc i poradniki dla użytkowników SmartBob',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://smartbobautomatyka.github.io',
  baseUrl: '/SmartbobPageWiki/',

  organizationName: 'SmartbobAutomatyka',
  projectName: 'SmartbobPageWiki',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // editUrl usunięty — nie pokazujemy linku "Edytuj tę stronę"
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'SmartBob',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            href: 'https://new.smartbob.pl',
            label: 'Sklep',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} SmartBob. Wszelkie prawa zastrzeżone.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
