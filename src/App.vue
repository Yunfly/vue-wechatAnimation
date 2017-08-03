<template>
  <div id="app">
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <keep-alive>
      <router-view class="router-view" ></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import { mapState,mapActions} from 'vuex'
  import Vue from "vue"
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components : {

    },
    computed:{
      ...mapState({
        direction: state => state.mutations.direction,
      })
    },
  }
</script>

<style scoped>
  #app{
    width: 100%;
    height:100%;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 300ms;
    height: 100%;
    top: 0;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }

  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>

<style>
  body,html{
    width:100%;
    height:100%;
  }
  *{
    margin:0;
  }
</style>
