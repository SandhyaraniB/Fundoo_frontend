import Login from './components/Login.vue';
import Counting from './components/Counting.vue';
import Register from './components/Register.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import ResetPassword from './components/ResetPassword.vue';
//import Vue from 'vue';
// import Router from 'vue-router'
//Vue.use(Vuerouter)

export default //new router
 
   [
    { 
        path: '/Login',
        component: Login
    },
    { 
        path: '/Counting', 
        component: Counting
    },
    { 
        path: '/', 
        component: Register
    },
    { 
        path: '/ForgotPassword', 
        component: ForgotPassword
    },
    { 
        path: '/ResetPassword', 
        component: ResetPassword
    },

    ]
// export default new Router({
//     mode: 'history',
//     routes: [
//         { 
//                     path: '/Login',
//                     component: Login
//                 },
//     ],
//   })
