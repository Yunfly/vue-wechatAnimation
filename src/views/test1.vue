<template>
  <div id="test1">
    <router-link to="/test2" tag="p">下一页</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {},
    computed: {},
    watch: {},
    created() {

    },
    methods: {}
  }
</script>

<style scoped>
  p{
    text-align: center;
    color: #fff;
  }
  #test1{
    background: url("../assets/20120606175552_YGMsQ.thumb.700_0.jpeg");
    background-size: 100% 100%;
    width: 100%;
    height:100%;
  }
</style>
