import Vue from 'vue'
import Router from 'vue-router'

const Test1 = ()=> import('../views/test1.vue');
const Test2 = ()=> import('../views/test2.vue');

Vue.use(Router);


export default new Router({

  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect:'/test1'
    },
    {
      path: '/test1',
      component: Test1
    },
    {
      path: '/test2',
      component: Test2
    },
  ]
})
