/** @type {import('next').NextConfig} */

// remote/next.config.js
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Navbar": "./components/Navbar.js",
          "./Footer": "./components/Footer.js",
        },
        shared: {
          // specify shared dependencies
          // read more in Shared Dependencies section
        },
      })
    );

    return config;
  },
};

export default nextConfig;
