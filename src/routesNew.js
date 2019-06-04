import Login from './components/Login.vue';
import Register from './components/Register.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import resetPassword from './components/resetPassword.vue';
import test from './components/test.vue';
import Verified from './components/verified.vue';
import navbar from './components/navbar.vue'
import reminder from './components/reminder.vue'
import dashboard from './components/dashboard.vue'
import archive from './components/archivenotes.vue'
import trashed from './components/trashnotes.vue'
// import parent from './components/parent.vue'
// import child from './components/child.vue'
export default
 [
    { 
        path: '/',
        component: Login
    },
    
    // { 
    //     path: '/parent', 
    //     component: parent
    // },
    // { 
    //     path: '/child', 
    //     component: child
    // },
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
                component:reminder,
               
            },
            {
                path:'trashed',
                component:trashed,
               
            },
         ],
     }
 ]