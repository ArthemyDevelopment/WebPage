import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'
import {Icon} from 'astro-icon/components'

export default defineThemeConfig({
  name: 'Matias Mellado',
  id: 'matias-mellado-portfolio',
  logo: logoImage,
  seo: {
    title: 'Portfolio Matias Mellado',
    description:
      'Recopilation of highlighted works and projects by Matias Mellado.',
    author: 'Matias Mellado',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#007979',
    secondary: '#FFCF95',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      /*{
        type: 'link',
        label: 'Blog',
        href: '/blog',
      },*/
      {
        type: 'link',
        label: 'Projects',
        href: '/projects',
      },
      /*{
        label: 'Features',
        type: 'dropdown',
        items: [
          {
            label: 'Accessibility statement',
            href: '/accessibility-statement',
          },
          {
            label: 'Accessible components',
            href: '/accessible-components',
          },
          {
            label: 'Accessible launcher',
            href: '/accessible-launcher',
          },
          {
            label: 'Color contrast checker',
            href: '/color-contrast-checker',
          },
          {
            label: 'Markdown page',
            href: '/markdown-page',
          },
          {
            label: 'MDX page',
            href: '/mdx-page',
          },
          {
            label: '404 page',
            href: '/404',
          },
          {
            label: 'Sitemap',
            href: '/sitemap',
          },
        ],
      },*/
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
    ],
    externalItems: [
      {
        type: 'link',
        label: 'Portfolio',
        href: 'https://arthemy.itch.io',
        icon: 'fa6-brands:itch-io',
        external: true,
      },
      {
        type: 'link',
        label: 'GitHub repos',
        href: 'https://github.com/arthemydevelopment',
        icon: 'fa6-brands:github',
        external: true,
      },
      {
        type: 'link',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/arthemy/',
        icon: 'fa6-brands:linkedin',
        external: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/incluud/',
      icon: 'lucide:github',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/incluud.dev',
      icon: 'lucide:bot-message-square',
    },
    {
      label: 'Open Collective',
      href: 'https://opencollective.com/incluud',
      icon: 'lucide:hand-heart',
    },
  ],
})

