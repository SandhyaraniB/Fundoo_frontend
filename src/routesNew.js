import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import resetPassword from './components/resetPassword.vue';
import test from './components/test.vue';
import Verified from './components/verified.vue';
import navbar from './components/navbar.vue'
import reminderr from './components/reminderr.vue'
import dashboard from './components/dashboard.vue'
import archive from './components/archivenotes.vue'
import trashed from './components/trashnotes.vue'
import getalllabelsfornote from './components/getlabelsfornote.vue'
export default
 [
    { 
        path: '/getalllabelsfornote',
        component: getalllabelsfornote
    },
    { 
        path: '/',
        component: Login
    },

     { 
        path: '/register', 
        component: Register
    },
    { 
        path: '/ForgotPassword', 
        component: ForgotPassword
    },
    { 
        path: '/resetPassword/:token', 
        component: resetPassword
    },
    {
        path:'/test',
        component:test
    },
    {
        path:'/validateEmailId/:token',
        component:Verified
    },
    {
        path:'/navbar',
        component:navbar,
        children:
          [
            {
                path:'dashboard',
                component:dashboard,
               
            },
            {
                path:'archive',
                component:archive,
               
            },
            {
                path:'reminder',
                component:reminderr,
               
            },
            {
                path:'trashed',
                component:trashed,
               
            },
         ],
     }
 ]