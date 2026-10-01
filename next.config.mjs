/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async rewrites() {
    return [
      { source: "/images/gold/:path*", destination: "/images/gold.svg" },
      { source: "/images/silver/:path*", destination: "/images/silver.svg" },
      { source: "/images/site/logo.png", destination: "/images/logo.svg" },
    ];
  },
};
export default nextConfig;
