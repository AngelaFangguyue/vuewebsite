import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import InputDemo from '../components/InputDemo.vue'
import FormDemo from '../components/FormDemo.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children:[
        {
          path: '/doc/button',
          component: ButtonDemo,
        },
        {
          path: '/doc/input',
          component: InputDemo,
        },
        {
          path: '/doc/form',
          component: FormDemo,
        }
      ]
    }
  ]
})

export default router
