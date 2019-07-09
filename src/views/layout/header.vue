<template>
  <div class="header">header</div>
</template>
<script>
export default {
  name: 'layoutHeader',
  data() {
    return {
      name: 'header',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    },
  },
};
</script>
<style scoped>
  .header{
    height: 40px;
    line-height: 40px;
    display: block;
    width: 100%;
    background: #000;
    color: #Fff;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>
