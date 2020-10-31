import Vue from 'vue'
import Vuex from 'vuex'
import PeopleModule from '../stores/modules/peopleStore'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        people: PeopleModule
    }
})