import NextBundleAnalyzer from '@next/bundle-analyzer';
const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export const nextConfig = {
  basePath: '',
  distDir: 'out',
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './cfLoader.ts',
  },
};

export default withBundleAnalyzer(nextConfig);
