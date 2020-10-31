import Repository from "../../repositories/repositoryFactory"
const UserRepository = Repository.get("users");

// initial state
const state = () => ({
    all: []
})

// getters
const getters = {}

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
        state.all = people
        console.log(state.all);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}