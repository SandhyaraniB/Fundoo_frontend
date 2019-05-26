import Login from './components/user/Login.vue';
import Counting from './components/user/Counting.vue';
import HelloWorld from './components/user/HelloWorld.vue';
import Register from './components/user/Register.vue';
import ForgotPassword from './components/user/ForgotPassword.vue';
import resetPassword from './components/user/resetPassword.vue';
import test from './components/user/test.vue';
import Verified from './components/user/verified.vue';
import navbar from './components/navbar.vue'
import CreateNote from './components/CreateNote.vue';
import dash from './components/dash.vue'
import dash1 from './components/dash1.vue'
import iconlist from './components/iconlist.vue';
import cards from './components/cards.vue';

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
        path: '/cards', 
        component: cards
    },
    { 
        path: '/iconlist', 
        component: iconlist
    },
    { 
        path: '/user/HelloWorld', 
        component: HelloWorld
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
        path:'/CreateNote',
        component:CreateNote
    },
    {
        path:'/dash',
        component:dash
    },
    {
        path:'/dash1',
        component:dash1
    },
    {
        path:'/navbar',
        component:navbar,
        children:
       [
            {
                path:'CreateNote',
                component:CreateNote
            }
       ]
    },
  
 ]
 