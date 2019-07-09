// demo 模块router
const demoRoute = [
  {
    path: '/demo/index',
    meta: {
      title: '测试-主页',
      isNotNeedLogin: true,
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/demo/Home.vue'),
  },
  {
    path: '/demo/about',
    meta: {
      title: '测试-关于页面',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/demo/About.vue'),
  },
];

/*eslint-disable*/ 
demoRoute.forEach((item) => {
  item.name = item.path;
});
/* eslint-enable */
export default demoRoute;
