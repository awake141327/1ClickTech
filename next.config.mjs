/** @type {import('next').NextConfig} */

import NextFederationPlugin from "@module-federation/nextjs-mf";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // specify remotes
    remote: `remote@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    remote2: `remote2@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
};
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(isServer),
        exposes: {
          
        },
      })
    );

    return config;
  },
};

export default nextConfig;
