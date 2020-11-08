import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { store } from './stores/index'
import { peopleRoutes } from "./routers/peopleRouter"
import { authRoutes } from "./routers/authRouter"
import VueRouter from "vue-router"
import 'vuetify/dist/vuetify.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

let routes = [...peopleRoutes, ...authRoutes]

Vue.config.productionTip = false
Vue.use(VueRouter);
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
