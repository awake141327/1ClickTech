/** @type {import('next').NextConfig} */

// remote/next.config.js
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote2",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Main": "./components/Main.js",
          "./About": "./components/About.js",
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
