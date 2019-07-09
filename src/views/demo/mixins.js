import {
  mapGetters,
  mapMutations,
} from 'vuex';

export default {
  data() {
    return {
    };
  },

  computed: {
    ...mapGetters([
      // 映射 this.count 为 store.state.count
      'getDemoTitle', // 用户相关信息
    ]),
  },
  methods: {
    ...mapMutations('demo', [
      'setTitle',
    ]),
  },
};
