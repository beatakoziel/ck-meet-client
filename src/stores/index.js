import Vue from 'vue'
import Vuex from 'vuex'
import PeopleStore from './modules/peopleStore'
import AuthStore from './modules/authStore'
import InfoStore from './modules/infoStore'
import MeetingsStore from './modules/meetingsStore'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        peopleStore: PeopleStore,
        authStore: AuthStore,
        infoStore: InfoStore,
        meetingsStore: MeetingsStore
    }
})