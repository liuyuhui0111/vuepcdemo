<template>
  <div class="navbar">
    <div class="nav">
       <navitem @itemClick="itemClick"
       v-if="list.length>0"
      :list="list"></navitem>
    </div>
  </div>
</template>
<script>
import navitem from './navitem.vue';

export default {
  name: 'navbar',
  data() {
    return {
      name: 'navbar',
      navlist: [],
    };
  },
  components: {
    navitem,
  },
  props: {
    list: { // 导航列表
      type: Array,
      default: () => [],
    },
  },
  mounted() {
  },
  methods: {
    itemClick(item) {
      this.$emit('itemClick', item);
      /*eslint-disable*/ 
      this.initActive();
      item.active = true;
      if (item.open) {
        item.open = false;
        return;
      }
      if (item.children && item.children.length > 0) {
        item.open = true;
      }
      /* eslint-enable */
    },
    initActive() {
      /*eslint-disable*/ 
      function initListActive(list) {
        list.forEach((item) => {
          item.active = false;
          if (item.children && item.children.length > 0) {
            initListActive(item.children);
          }
        });
      }
      /* eslint-enable */
      initListActive(this.list);
    },
  },
};
</script>
<style scoped>
  .navbar{
    position: absolute;
    width: 200px;
    top: 0;
    left: 0;
    bottom: 0;
    background: #ccc;
    z-index: 2;
  }
  .nav{
    font-size: 20px;
  }

</style>
