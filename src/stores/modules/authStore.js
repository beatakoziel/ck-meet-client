import Repository from "../../repositories/repositoryFactory"
const AuthRepository = Repository.get("auth");

// initial state
const state = () => ({
    jwtToken: localStorage.getItem('user-token') || '',
    isAuth: false
})

// getters
const getters = {
    isAuthenticated() {
        if (localStorage.getItem("user-token") !== '')
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
        console.log(payload);
        return AuthRepository.register(payload).then(response => {
            dispatch('login', payload);
            return response;
        }).catch(error => {
            return error.response;
        });
    },
    test() {
        AuthRepository.test().then(response => console.log(response));
    }
}

// mutations
const mutations = {
    setJwtToken(state, jwtToken) {
        localStorage.setItem('user-token', jwtToken)
        state.isAuth = true;
    },
    logout(state) {
        localStorage.removeItem('user-token');
        state.jwtToken = '';
        state.isAuth = false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}