import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import { store } from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
