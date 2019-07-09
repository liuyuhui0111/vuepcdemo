<template>
  <div class="home">
    <img @click="sendApi" alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import {
  showFoucusPicFromDemo,
  getSourceDataFromDemo,
} from '@/api/demo/index';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    async sendApi() {
      let showFoucusPicFromDemoRes = await showFoucusPicFromDemo();
      let getSourceDataFromDemoRes = await getSourceDataFromDemo();
      console.log(showFoucusPicFromDemoRes, getSourceDataFromDemoRes);
    },
  },
};
</script>
