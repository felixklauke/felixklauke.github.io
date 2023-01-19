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
        source: '/:path*/',
        destination: '/de/:path*/',
        permanent: false,
      },
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
