<template>
  <div class="item">
    <div class="item-box"
    v-for="(item,index) in list"
    :class="[
    {open:item.open},
    {active:item.active},
    {icon:item.children && item.children.length>0}
    ]"
    :key="index">
      <div @click="itemClick(item)" class="text">
        {{item.text}}
      </div>
      <navitem v-show="item.open"
      @itemClick="itemClick"
      :list="item.children"></navitem>
    </div>

  </div>
</template>
<script>
export default {
  name: 'navitem',
  data() {
    return {
      name: 'navitem',
    };
  },
  mounted() {
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    itemClick(item) {
      this.$emit('itemClick', item);
    },
  },
};
</script>
<style scoped>
  .item{
    text-align: left;
    background: #333;
    color: #fff;
    font-size: 0.9em;
  }
  .text{
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    cursor: pointer;
    position: relative;
    font-weight: bold;
  }
  .text:hover{
    background: #ccc;
  }
  .item-box.icon>.text:after{
    content: "﹀";
    position: absolute;
    color: #fff;
    right: 20px;
    top: 0px;
    font-size: 10px;
  }
  .item-box.open>.text:after{
    content: "︿";
  }
  .item-box.active>.text{
    color: #f00;
    background: #ccc;
  }
</style>
