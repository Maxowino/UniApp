import {createRouter,createWebHistory} from 'vue-router'

import Landingpage from "./../components/Landingpage.vue"
import Aboutus from "./../components/Aboutus.vue"
import Login from "./../components/Login.vue"
import Signup from "./../components/Signup.vue"



const routes = [
    {
        path: '/',
        name:'landingpage',
        component: Landingpage,
    },
    {
        path: '/aboutus',
        name:'aboutus',
        component: Aboutus,
    },
    {
        path: '/login',
        name:'login',
        component: Login,
    },
    {
        path: '/signup',
        name:'signup',
        component:Signup,
    },
]
const router= createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)
export default router ;