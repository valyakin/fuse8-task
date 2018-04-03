import Vue from 'vue'
import Router from 'vue-router'
import Pages from 'src/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'public',
      component: Pages.Public
    }
  ]
})
