import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import routes from './router'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faSpinner,faCartPlus,faCheck,faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret, faSpinner, faCartPlus, faCheck, faTimesCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.use(VueRouter);
Vue.config.productionTip = false

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


 import "@fortawesome/fontawesome-free/css/all.css";
 import "@fortawesome/fontawesome-free/js/all.js";
const router= new VueRouter({
  routes:routes,
  mode:'history'
})
new Vue({
  router,   
  store,
  render: h => h(App),
}).$mount('#app')
