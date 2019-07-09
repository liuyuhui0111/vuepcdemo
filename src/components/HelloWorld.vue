<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/demo/about">
      登录拦截页面
    </router-link>

    <div>vuex:demo title等于 {{getDemoTitle}}</div>
    <div @click="setTitle('aaaa')">setTitle="aaa"</div>
    <div @click="setTitle('bbb')">setTitle="bbb"</div>
  </div>
</template>

<script>
import mixin from '@/views/demo/mixins';

export default {
  name: 'HelloWorld',
  mixins: [mixin],
  props: {
    msg: String,
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
