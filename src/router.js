import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { homedir } from 'os';
import store from './store';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/page/1'
    },
    {
      path: '/page/:id',
      component: Home,
      beforeEnter: (to, from, next) => {
        store.commit('set', { key: 'curPage', value: Number(to.params.id) });
			  next();
      }
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
