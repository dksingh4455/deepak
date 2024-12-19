/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Ensures the app is exported as a static site
    trailingSlash: true, // Adds trailing slashes to URLs for static routing
    images: {
      unoptimized: true, // Avoids issues with Next.js image optimization
    },
  };
  
  export default nextConfig;
  
