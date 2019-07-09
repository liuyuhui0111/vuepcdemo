// 配置代理转发
let demoProxy = {
  '/fatscourse': {
    target: 'http://test.5ifapiao.com:8888',
    changeOrigin: true,
    pathRewrite: { '^/fatscourse': '/fatscourse' },
  },
  '/demo': {
    target: 'http://test.5ifapiao.com:8888',
    changeOrigin: true,
    pathRewrite: { '^/demo': '' },
  },
};

module.exports = demoProxy;
