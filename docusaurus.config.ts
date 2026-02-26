import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ZSGate',
  tagline: 'Enterprise LLM Gateway for governance and audit',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://zsgate.ai',
  baseUrl: '/',

  organizationName: 'zsgate',
  projectName: 'zsgate-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  themes: [],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-banner.png',
    navbar: {
      title: 'ZSGate',
      logo: {
        alt: 'ZSGate Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {to: '/docs/feature-matrix', label: 'OSS vs Enterprise', position: 'left'},
        {to: '/docs/pricing', label: 'Pricing', position: 'left'},
        {to: '/docs/enterprise/overview', label: 'Enterprise', position: 'left'},
        {href: 'https://github.com/your-org/zsgate', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {label: 'Docs', to: '/docs/intro'},
            {label: 'OSS vs Enterprise', to: '/docs/feature-matrix'},
            {label: 'Pricing', to: '/docs/pricing'},
          ],
        },
        {
          title: 'Community',
          items: [{label: 'GitHub', href: 'https://github.com/your-org/zsgate'}],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} ZSGate`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
