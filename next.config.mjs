import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
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
        permanent: true
      },
      {
        source: '/stack',
        destination: '/en/stack',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/de/projects',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/de/about',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/de/articles',
        permanent: true,
      },
      {
        source: '/articles/:slug',
        destination: '/de/articles/:slug',
        permanent: true,
      }
    ]
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
