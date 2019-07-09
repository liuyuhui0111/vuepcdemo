import {
  mapGetters,
  mapMutations,
} from 'vuex';
import { login, loginout } from '@/api/apis';

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          // token: '',
          publicPath: process.env.BASE_URL,
          isCanRequest: true, // 防止连续请求
        };
      },
      computed: {
        ...mapGetters([
          'token', // 登录token
        ]),
      },
      methods: {
        login() {
          login();
        },
        loginout() {
          loginout();
        },
        ...mapMutations([
          'setToken',
        ]),
      },

    });
  },
};
