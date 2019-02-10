import Vue from 'vue'
import Router from 'vue-router'
import Join from './views/Join.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'join',
      component: Join
    },
    {
      path: '/playlist',
      name: 'playlist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Playlist.vue')
    }
  ]
})
