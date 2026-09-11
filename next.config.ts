import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Iconos de tecnología de Simple Icons, usados en la nube del stack y en
      // la lista de certificados. Se piden en el color de acento del sitio.
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
};

export default nextConfig;
