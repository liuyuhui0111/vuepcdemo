import axios from '@/api/axios';
import demoConf from '@/views/demo/config';
// 模块内接口  接口命名规范 API+From+模块名称
const BASE_URL = demoConf.baseURL || '';
export function showFoucusPicFromDemo(params) {
  // 获取模块信息
  const url = '/fatscourse/offlineUnLogin/showFoucusPic';
  return axios.post(url, params || {});
}

export function getSourceDataFromDemo(params) {
  // 获取模块信息
  const url = `${BASE_URL}/fatscourse/source-web/getSourceData`;
  return axios.post(url, params || {});
}
