import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  /**
   * NOTE: the latest canary version of Next.js.
   * * 現在(20241104)、pprは実験的な機能のため、canaryにバージョンを変更しないと、pprは利用できない。
   */
  // experimental: {
  //   ppr: 'incremental'
  // }
};

export default nextConfig;
