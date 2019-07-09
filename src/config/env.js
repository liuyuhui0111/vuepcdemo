
/* eslint-disable */
let COMMON_ENV = {
  SSO_URL: 'http://test.5ifapiao.com:8888', // 单点登录相关地址
  CLIENT_ID:'fatc',		//登录对接CLIENT_ID
	COMMON_REPLACE_URL:'COMMONREPLACEURL',		//#号替换字段?COMMONREPLACEURL=
	COMMON_TOKEN:'token',			//token字段名称
	COMMON_TOKEN_DAY:0,				//token 失效时间 0代表关闭浏览器就失效
};
if (process.env.VUE_APP_ENV === 'production') {
	// 生产环境
  COMMON_ENV.SSO_URL = 'https://sso.ele-cloud.com';
} else if (process.env.VUE_APP_ENV === 'pre') {
	// 预发环境
	// COMMON_ENV.SSO_URL = 'http://apptest.5ifapiao.com';
	COMMON_ENV.SSO_URL = 'https://sso-pre.ele-cloud.com';
} else if (process.env.VUE_APP_ENV === 'test') {
	// 测试环境
	// COMMON_ENV.SSO_URL = 'http://apptest.5ifapiao.com';
	COMMON_ENV.SSO_URL = 'http://test.5ifapiao.com:8888';
} else if (process.env.VUE_APP_ENV === 'development') {
	// 开发环境
  // COMMON_ENV.SSO_URL = 'http://ysxy.5ifapiao.com';
  COMMON_ENV.SSO_URL = 'http://test.5ifapiao.com:8888';
}

export default COMMON_ENV;
