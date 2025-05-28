import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};
export default nextConfig;

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ytimg.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
}


