/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'production' ? '/frontend' : '',
    publicRuntimeConfig: {
        contextPath: process.env.NODE_ENV === 'production' ? '/frontend' : ''
        //backendUrl: `${process.env.VITE_BACKEND_URL}/api`
       // uploadPath: process.env.NODE_ENV === 'production' ? '/sakai-react/upload.php' : '/api/upload'
    }
}

module.exports = nextConfig
