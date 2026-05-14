import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/projects/cybersecurity-seo",
        destination: "/projects/cyberse-research-agent",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
