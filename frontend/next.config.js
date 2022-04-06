module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
    path: "/_next/image",
    loader: "default",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  reactStrictMode: true,
};
