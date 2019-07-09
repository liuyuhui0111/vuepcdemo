let publicPath = process.env.NODE_ENV === 'development' ? '/' : '/dist/'; // 生产环境文件构建路径
/*eslint-disable*/
var path = require('path');
const pageProxy = require(path.join(__dirname,'/src/proxy.js'));   //导入pageProxy

let proxy = {
'/course_authentication': {
  target: 'http://test.5ifapiao.com:8888',
  changeOrigin: true,
  pathRewrite: {'^/course_authentication' : '/course_authentication'}
},
...pageProxy
};

console.log(proxy);

module.exports = {
    // 基本路径
    publicPath: publicPath,
    lintOnSave: process.env.NODE_ENV !== 'production',
    devServer: {
      proxy,
    },
    // 生产环境是否需要sourcemap
    productionSourceMap:false,
    chainWebpack: config => {
      // 移除 prefetch 插件
      config.plugins.delete('prefetch');
    },
    configureWebpack: config => {
      // 去除生产环境console.log
      if (process.env.NODE_ENV === 'production') {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      }
    }
};

