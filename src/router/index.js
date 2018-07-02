import Vue from 'vue'
import Router from 'vue-router'
import Splash from '@/components/Splash'
import ToDo from '@/components/AppointmentList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/appts',
      name: 'ToDo',
      component: ToDo
    }
  ]
})
