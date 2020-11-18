import Repository from "../../repositories/repositoryFactory"
const UserRepository = Repository.get("users");

// initial state
const state = () => ({
    people: [],
    currentUser: null
})

// getters
const getters = {

}

// actions
const actions = {
    getPeople({ commit }) {
        UserRepository.get().then(res => {
            commit('setPeople', res.data)
        });
    }
}

// mutations
const mutations = {
    setPeople(state, people) {
        state.people = people
    },
    setCurrentUser(state, user) {
        state.currentUser = user;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}