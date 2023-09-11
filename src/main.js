import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Scrollspy from 'vue2-scrollspy';
import store from "./store";

import BootstrapVue from 'bootstrap-vue'
import VueYoutube from 'vue-youtube'
import VueParticles from 'vue-particles'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

var VueScrollTo = require('vue-scrollto');

Vue.use(VueParticles)
Vue.use(VueYoutube)
Vue.use(VueScrollTo)

Vue.use(BootstrapVue);

Vue.use(Scrollspy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
