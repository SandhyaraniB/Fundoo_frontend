import Vue from 'vue'
import App from './App.vue'
//import VueResource from './vue-resource'
import Vuerouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Routes from './routesNew'
import VueRouter from 'vue-router';

Vue.use(VueMaterial);
Vue.use(Vuerouter);
//Vue.use(VueResource);
Vue.config.productionTip = false
const router=new VueRouter({
  mode: 'history',
  routes:Routes,
  
});
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

