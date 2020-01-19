import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/pages/list'
import guidelines from '@/components/pages/guidelines'
/*import meetup from '@/components/meetups/meetup'
import createmeetups from '@/components/meetups/createmeetups'
import profile from '@/components/user/profile'
import signin from '@/components/user/signin'
import signup from '@/components/user/signup'
 */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/guidelines',
      name: 'guidelines',
      component: guidelines
    }

  ],

  mode: 'history'
})
