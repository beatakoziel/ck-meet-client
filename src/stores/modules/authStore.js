import Repository from "../../repositories/repositoryFactory"
const AuthRepository = Repository.get("auth");
const UserRepository = Repository.get("users");

// initial state
const state = () => ({
    jwtToken: localStorage.getItem('user-token') || '',
    status: localStorage.getItem('status') || '',
    step: localStorage.getItem('step') || null
})

// getters
const getters = {
    isAuthenticated() {
        if (localStorage.getItem("user-token") !== null)
            return true;
        else return false;
    }
}

// actions
const actions = {
    login({ commit }, payload) {
        return AuthRepository.login(payload).then(response => {
            commit('setUserAuthData', response.data)
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
    },
    status({ commit }) {
        UserRepository.status()
            .then(res => {
                commit('setStatus', res.data)
            });
    },
}

// mutations
const mutations = {
    setUserAuthData(state, data) {
        localStorage.setItem('user-token', data.token)
        localStorage.setItem("status", data.status)
        state.jwtToken = data.token
        state.status = data.status
        if (state.status == "NOT_COMPLETED") state.step = 1;
        else if (state.status == "PERSONAL_DATA") state.step = 2;
        else if (state.status == "PERSONALIZATION") state.step = 3;
        else state.step = 0;
        localStorage.setItem("step", state.step)
    },
    setStatus(state, status) {
        state.status = status;
        localStorage.setItem("status", status)
        if (status == "NOT_COMPLETED") state.step = 1;
        else if (status == "PERSONAL_DATA") state.step = 2;
        else if (status == "PERSONALIZATION") state.step = 3;
        else state.step = 0;
        localStorage.setItem("step", state.step)
    },
    logout(state) {
        localStorage.removeItem('user-token');
        localStorage.removeItem("status")
        state.status = "";
        state.jwtToken = '';
    },
    resetStatus(state) {
        state.status = "";
        localStorage.removeItem("status")
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}