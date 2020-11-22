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
    }
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
    status() {
        return UserRepository.status()
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            });
    },
    registerPersonalData({ state }) {
        return UserRepository.registerPersonalData(state.personalData)
            .then(response => {
                console.log(response);
                return response;
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