import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Ritualist',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Ritualist',
  },
};

export default nextConfig;
