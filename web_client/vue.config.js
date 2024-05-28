module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  chainWebpack(config) {
    const FILE_RE = /\.(vue|js|ts|svg)$/;

    config.module.rule('svg').issuer((file) => !FILE_RE.test(file));

    config.module
      .rule('svg-component')
      .test(/\.svg$/)
      .issuer((file) => FILE_RE.test(file))
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader');
  },
};
