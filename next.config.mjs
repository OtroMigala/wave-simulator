// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/wave-simulator',
    images: {
      unoptimized: true
    }
  }
  
  // Change module.exports to export default for .mjs files
  export default nextConfig