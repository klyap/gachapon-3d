/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: {
        loader: 'file-loader',
        // options: {
        //   publicPath: '/_next/static/sounds/',
        //   outputPath: 'static/sounds/',
        //   name: '[name].[ext]',
        //   esModule: false,
        // },
      },
    });
    // config.reactStrictMode = true;
    // config.swcMinify = true;
    return config;
  },
};

