import Login from './components/Login.vue';
import HelloWorld from './components/HelloWorld.vue';
import Register from './components/Register.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import resetPassword from './components/resetPassword.vue';
import test from './components/test.vue';
import testone from './components/testone.vue';
import Verified from './components/verified.vue';
import navbar from './components/navbar.vue'
import CreateNote from './components/CreateNote.vue';
import iconlist from './components/iconlist.vue';
import cards from './components/cards.vue';
import getlabels from './components/getlabels.vue';
import reminder from './components/reminder.vue'
export default
 [
    { 
        path: '/Login',
        component: Login
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
        path: '/HelloWorld', 
        component: HelloWorld
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
                path:'',
                component:cards,
                // children:
                // [
                //      {
                //          path:'/iconlist',
                //          component:iconlist
                //      },
                // ]
            },
            {
                path:'/reminder',
                component:reminder,
                // children:
                // [
                //      {
                //          path:'/iconlist',
                //          component:iconlist
                //      },
                // ]
            },
            {
                path:'/CreateNote',
                component:CreateNote
            },
       ]
    },
    {
        path:'cards',
        component:cards,
        children:
        [
             {
                 path:'iconlist',
                 component:iconlist
             },
        ]
    }
 ]
 