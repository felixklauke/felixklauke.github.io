import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
import nextI18nConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    scrollRestoration: true,
  },
  images: {
    unoptimized: true
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/de',
        permanent: false,
      },
      {
        source: '/stack',
        destination: '/en/stack',
        permanent: false,
      },
      {
        source: '/projects',
        destination: '/de/projects',
        permanent: false,
      },
      {
        source: '/about',
        destination: '/de/about',
        permanent: false,
      },
      {
        source: '/articles',
        destination: '/de/articles',
        permanent: false,
      },
      {
        source: '/articles/:slug',
        destination: '/de/articles/:slug',
        permanent: false,
      }
    ]
  }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
