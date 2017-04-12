import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home.vue'
import joke from '@/pages/joke.vue'
import jokeimg from '@/pages/joke-img.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/joke',
      component: joke
    },
    {
      path: '/joke-img',
      component: jokeimg
    }
  ]
})
