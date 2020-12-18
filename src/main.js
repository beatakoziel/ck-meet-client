import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {store} from './stores/index'
import {peopleRoutes} from "./routers/peopleRouter"
import {authRoutes} from "./routers/authRouter"
import {meetingsRoutes} from "./routers/meetingsRouter"
import VueRouter from "vue-router"
import 'vuetify/dist/vuetify.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'// https://github.com/dolce/iziToast
import 'izitoast/dist/css/iziToast.min.css'

function toast({title, message, type, timeout}) {
    if (type === VueNotifications.types.warn) type = 'warning'
    return iziToast[type]({title, message, timeout})
}

const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
}
Vue.use(VueNotifications, options)
let routes = [...peopleRoutes, ...authRoutes, ...meetingsRoutes]

Vue.config.productionTip = false
Vue.use(VueRouter);
export const router = new VueRouter({
    mode: "history",
    routes
})

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app')
