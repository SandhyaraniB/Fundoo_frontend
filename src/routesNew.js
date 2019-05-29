import Login from './components/user/Login.vue';
import Counting from './components/user/Counting.vue';
import HelloWorld from './components/user/HelloWorld.vue';
import Register from './components/user/Register.vue';
import ForgotPassword from './components/user/ForgotPassword.vue';
import resetPassword from './components/user/resetPassword.vue';
import test from './components/user/test.vue';
import testone from './components/testone.vue';

import Verified from './components/user/verified.vue';
import navbar from './components/navbar.vue'
import CreateNote from './components/CreateNote.vue';
import iconlist from './components/iconlist.vue';
import cards from './components/cards.vue';
import getlabels from './components/getlabels.vue'
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
        path: '/testone', 
        component: testone
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
        path:'/getlabels',
        component:getlabels
    },
    {
        path:'/navbar',
        component:navbar,
        children:
       [
            {
                path:'CreateNote',
                component:CreateNote
            },
            {
                path:'cards',
                component:cards
            }
       ]
    },
  
 ]
 