<template>
  <div class="footer">footer</div>
</template>
<script>
export default {
  name: 'layoutFooter',
  data() {
    return {
      name: 'footer',
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
.footer{
    height: 40px;
    line-height: 40px;
    display: block;
    width: 100%;
    background: #000;
    color: #Fff;
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>
