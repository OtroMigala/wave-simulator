// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/wave-simulator',
    assetPrefix: '/wave-simulator/',
    images: {
      unoptimized: true,
      domains: ['localhost']
    },
    reactStrictMode: true,
    trailingSlash: true,
    // Required for GitHub Pages
    experimental: {
      images: {
        allowFutureImage: true
      }
    }
  }
  
  export default nextConfig