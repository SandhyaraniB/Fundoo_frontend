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

Vue.use(Vuetify)
Vue.use(VTooltip)
Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.component(VueMaterialIcon.name, VueMaterialIcon)
Vue.config.productionTip = false;
const router=new VueRouter({
  mode: 'history',
  routes:Routes,
  
});
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

