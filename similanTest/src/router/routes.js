import { createRouter, createWebHashHistory } from 'vue-router'
import Grader from '../components/grader.vue'
import Calculator from '../components/calculator.vue'
import Crud from '../components/crud.vue'
import Editcust from '../components/editcust.vue'

const routes =[
    {
        path:'/',
        name:'Grader',
        component:Grader
    },
    {
        path:'/calculator',
        name:'Calculator',
        component:Calculator
    },
    {
        path:'/crud',
        name:'Crud',
        component:Crud
    },
    {
        path:'/editcust',
        name:'Edit customer',
        component:Editcust
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
  export default router