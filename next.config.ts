import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname,
  },
  images: {
    // 70 for the hero (full-bleed, sits behind a scrim); 75 is the default
    // every other image uses.
    qualities: [70, 75],
  },
};

export default nextConfig;
