import Repository from "../../repositories/repositoryFactory"
const InfoRepository = Repository.get("info");

// initial state
const state = () => ({
    interests: []
})

// getters
const getters = {
}

// actions
const actions = {
    getInterests({ commit }) {
        return InfoRepository.getInterests().then(response => {
            commit('setInterests', response.data)
            return response;
        }).catch(error => {
            return error.response;
        });
    },
}

// mutations
const mutations = {
    setInterests(state, interests) {
        state.interests = interests
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}