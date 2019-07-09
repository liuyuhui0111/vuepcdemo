import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import mixin from './mixin';

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.use(mixin);
window.vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
