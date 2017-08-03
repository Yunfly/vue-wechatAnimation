<template>
<div id="test2">
  <router-link to="/" tag="p">上一页</router-link>
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
  #test2{
    background: url("../assets/timg.jpg");
    background-size: 100% 100%;
    width: 100%;
    height:100%;
  }
</style>
