import Repository from "../../repositories/repositoryFactory"
const UserRepository = Repository.get("users");

// initial state
const state = () => ({
    people: [],
    currentUser: null,
    personalData: {
        nickname: "",
        description: "",
        dateOfBirth: new Date().toISOString().substr(0, 10),
        email: "",
        phoneNumber: "",
        linkToFacebookProfile: "",
        gender: "",
    },
    status: '',
    step: null,
    username: ""
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
    },
    status({ commit }) {
        UserRepository.status()
            .then(res => {
                console.log('USTAWIAM')
                commit('setStatus', res.data)
            });
    },
    currentUserName({ state, commit }) {
        UserRepository.currentUserName()
            .then(res => {
                commit('setUsername', res.data)
                console.log(state.username)
            });
    },
    registerPersonalData({ state }) {
        return UserRepository.registerPersonalData(state.personalData)
            .then(response => {
                console.log(response);
                return response.data;
            })
            .catch(error => {
                return error.response;
            });
    }
}

// mutations
const mutations = {
    setPeople(state, people) {
        state.people = people
    },
    setUsername(state, username) {
        state.username = username
    },
    setCurrentUser(state, user) {
        state.currentUser = user;
    },
    setStatus(state, status) {
        state.status = status;
        if (status == "NOT_COMPLETED") state.step = 1;
        else if (status == "PERSONAL_DATA") state.step = 2;
        else if (status == "PERSONALIZE") state.step = 3;
        else state.step = 0;
        console.log('USTAWIAM' + state.status)
        console.log('USTAWIAM' + state.step)
    },
    resetStatus(state) {
        state.status = "";
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}