import Vue from 'vue'
import VueRouter from 'vue-router'

import landingpage from './components/Landingpage'
import aboutus from './components/Aboutus'
import login from './components/Login'
import signup from './components/signin'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:'landingpage',
        component: Landingpage,
    },
    {
        path: '/Aboutus',
        name:'aboutus',
        component: Aboutus,
    },
    {
        path: '/Login',
        name:'login',
        component: Login,
    },
    {
        path: '/signin',
        name:'signup',
        component:signin,
    },
]