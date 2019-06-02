import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Routes from './routesNew';
import VueRouter from 'vue-router';
import VueMaterialIcon from 'vue-material-icon';
import VTooltip from 'v-tooltip'
import Vuetify from 'vuetify'
import MenuIcon from "vue-material-design-icons/Menu.vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
 Vue.component("menu-icon", MenuIcon);
 Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons.

import VueFlex from "vue-flex";
// Already autoprefixed for vendor prefixes.
// Also namespaced to avoid collisions.
import "vue-flex/dist/vue-flex.css";
//  import navbar from './components/navbar.vue'
import VueMq from 'vue-mq'
Vue.use(VueFlex);
//  Vue.use(Vuetify)
Vue.use(Vuetify, {
  iconfont: 'mdi'||'md' || 'mdi' || 'fa' || 'fa4'||'faSvg',
  icons: {
    'cancel': 'fas fa-ban',
    'menu': 'fas fa-ellipsis-v'
  }
})
Vue.use(VTooltip)
Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.component(VueMaterialIcon.name, VueMaterialIcon)
Vue.config.productionTip = false;
Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 1250,
    lg: Infinity,
  }
})
const router=new VueRouter({
  mode: 'history',
  routes:Routes,
  // routes:
  // [
  //   {
  //     path:'/navbar',
  //     component:navbar
  //   } 
  
  // ]
});
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

