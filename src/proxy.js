// 各模块配置代理 统一引入这个文件
let path = require('path');
/*eslint-disable*/ 
const demoProxy = require(path.join(__dirname, '/api/demo/proxy.js'));

let pageProxy = {
  ...demoProxy,
};

module.exports = pageProxy;
