<template>
  <div class="layout">
    <layoutHeader></layoutHeader>
    <navbar :list="list" @itemClick="itemClick"></navbar>
    <div class="content">
      <router-view></router-view>
    </div>
    <layoutFooter></layoutFooter>
  </div>
</template>
<script>
import header from './header.vue';
import footer from './footer.vue';
import navbar from './navbar.vue';


export default {
  name: 'layout',

  data() {
    return {
      name: 'layout',
      list: [
        {
          id: 1,
          text: '一级菜单1',
          open: false,
          active: false,
          children: [
            {
              id: 11,
              text: '二级菜单1',
              open: false,
              active: false,
              children: [
                {
                  id: 111,
                  text: '三级菜单1',
                  open: false,
                  active: false,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          text: '一级菜单2',
          open: false,
          active: false,
          children: [
            {
              id: 21,
              text: '二级菜单2',
              open: false,
              active: false,
              children: [
                {
                  id: 211,
                  text: '三级菜单3',
                  open: false,
                  active: false,
                },
                {
                  id: 212,
                  text: '三级菜单3',
                  open: false,
                  active: false,
                  children: [
                    {
                      id: 2111,
                      text: '四级菜单3',
                      open: false,
                      active: false,
                    },
                  ],
                },
              ],
            },
            {
              id: 22,
              text: '二级菜单3',
              open: false,
              active: false,
            },
          ],
        },
        {
          id: 3,
          text: '一级菜单3',
          open: false,
          active: false,
        },
      ],
    };
  },
  components: {
    layoutHeader: header,
    layoutFooter: footer,
    navbar,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    },
    itemClick(item) {
      console.log(item);
    },
  },
};
</script>
<style scoped>
  html,body{
    min-height: 100%;
  }
  html body{
    margin: 0;
  }
  .layout{
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    box-sizing:border-box;
    padding:40px 0 40px 200px;
    position: relative;
  }
</style>
