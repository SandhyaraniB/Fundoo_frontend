import Login from './components/user/Login.vue';
import Counting from './components/user/Counting.vue';
import Register from './components/user/Register.vue';
import ForgotPassword from './components/user/ForgotPassword.vue';
import resetPassword from './components/user/resetPassword.vue';
import test from './components/user/test.vue';
import Verified from './components/user/verified.vue';
import dashboard from './components/dashboard/dashboard.vue'
export default
 [
    { 
        path: '/user/Login',
        component: Login
    },
    { 
        path: '/user/Counting', 
        component: Counting
    },
    { 
        path: '/user/', 
        component: Register
    },
    { 
        path: '/user/ForgotPassword', 
        component: ForgotPassword
    },
    { 
        path: '/user/resetPassword/:token', 
        component: resetPassword
    },
    {
        path:'/user/test',
        component:test
    },
    {
        path:'/user/validateEmailId/:token',
        component:Verified
    },
    {
        path:'/dashboard/dashboard',
        component:dashboard
    }
 ]
 