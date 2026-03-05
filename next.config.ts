import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/RitualistApp',
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/RitualistApp',
  },
};

export default nextConfig;
