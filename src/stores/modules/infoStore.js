import Repository from "../../repositories/repositoryFactory"
const InfoRepository = Repository.get("info");

// initial state
const state = () => ({
    interests: [],
    categories: []
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
    getCategories({ commit }) {
        return InfoRepository.getCategories().then(response => {
            commit('setCategories', response.data)
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
    setCategories(state, categories) {
        state.categories = categories
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}