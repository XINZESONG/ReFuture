/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "glitchproductions.store",
        port: "",
        pathname: "/pages/**",
      },
    ],
  },
};

export default nextConfig;
