import demoConf from '@/views/demo/config';
// 命名规则 get+模块名称+字段名称  例如getDemoTitle
export default {
  getDemoTitle: state => state[demoConf.name].title,
};
