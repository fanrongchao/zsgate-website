import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'quickstart',
    'architecture',
    'feature-matrix',
    'pricing',
    {
      type: 'category',
      label: 'Enterprise',
      items: ['enterprise/overview'],
    },
  ],
};

export default sidebars;
