import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { store } from './stores/index'
import { routes } from "./routers/peopleRouter"
import VueRouter from "vue-router"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon)
const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  vuetify,
  store,
  router,

  render: h => h(App)
}).$mount('#app')
