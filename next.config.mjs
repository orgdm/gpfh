import NextBundleAnalyzer from '@next/bundle-analyzer';
const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './cfLoader.ts',
  },
};

export default withBundleAnalyzer(nextConfig);
