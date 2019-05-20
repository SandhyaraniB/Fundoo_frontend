import Login from './components/Login.vue';
import Counting from './components/Counting.vue';
import Register from './components/Register.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import resetPassword from './components/resetPassword.vue';
import test from './components/test.vue'
import Verified from './components/verified.vue'
// import router from 'router'
//import Vue from 'vue';
// import Router from 'vue-router'
//Vue.use(Vuerouter)

export default//route=new router({
 
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
        path: '/user/resetPassword/:token', 
        component: resetPassword
    },
    {
        path:'/test',
        component:test
    },
    {
        path:'/user/validateEmailId/:token',
        component:Verified
    },

    ]
    // })
// export default new Router({
//     mode: 'history',
//     routes: [
//         { 
//                     path: '/Login',
//                     component: Login
//                 },
//     ],
//   })
