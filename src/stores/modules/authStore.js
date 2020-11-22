import Repository from "../../repositories/repositoryFactory"
const AuthRepository = Repository.get("auth");

// initial state
const state = () => ({
    jwtToken: localStorage.getItem('user-token') || '',
})

// getters
const getters = {
    isAuthenticated() {
        console.log(localStorage.getItem("user-token"))
        if (localStorage.getItem("user-token") !== null)
            return true;
        else return false;
    }
}

// actions
const actions = {
    login({ commit }, payload) {
        return AuthRepository.login(payload).then(response => {
            commit('setJwtToken', response.data)
            return response;
        }).catch(error => {
            return error.response;
        });
    },
    register({ dispatch }, payload) {
        return AuthRepository.register(payload).then(response => {
            dispatch('login', payload);
            return response;
        }).catch(error => {
            return error.response;
        });
    }
}

// mutations
const mutations = {
    setJwtToken(state, jwtToken) {
        localStorage.setItem('user-token', jwtToken)
    },
    logout(state) {
        localStorage.removeItem('user-token');
        state.jwtToken = '';
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}