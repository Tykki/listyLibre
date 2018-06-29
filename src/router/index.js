import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ToDo from '@/components/AppointmentList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/supreme',
      name: 'ToDo',
      component: ToDo
    }
  ]
})
