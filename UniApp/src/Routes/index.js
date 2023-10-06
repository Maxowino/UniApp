import {createRouter,createWebHistory} from 'vue-router'

import Landingpage from "./../components/Landingpage.vue"
import about from "./../components/Aboutus.vue"
import Login from "./../components/Login.vue"
import Signup from "./../components/Signup.vue"
import Register from "./../components/Register.vue"
import Students from "./../components/Students.vue"



const routes = [
    {
        path: '/',
        name:'Landingpage',
        component: Landingpage,
    },
    {
        path: '/aboutus',
        name:'aboutus',
        component: about,
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
    {
        path: '/register',
        name:'register',
        component:Register,
    },
    {
        path: '/students',
        name:'students',
        component:Students,
    },
]
const router= createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)
export default router ;