import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import "bootstrap/dist/js/bootstrap.bundle.min.js";