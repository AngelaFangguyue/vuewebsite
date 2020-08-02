import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
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
        // {
        //   path: '',
        //   component: SwitchDemo,
        // },
        {
          path: '/doc/switch',
          component: SwitchDemo,
        },
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

router.afterEach(()=>{
  console.log("router/index.js里面路由切换了");
})

export default router
