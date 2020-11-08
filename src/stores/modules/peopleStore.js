import Repository from "../../repositories/repositoryFactory"
const UserRepository = Repository.get("users");

// initial state
const state = () => ({
    people: [],
    currentUser: {
        object: "hello"
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
    }
}

// mutations
const mutations = {
    setPeople(state, people) {
        state.people = people
    },
    setCurrentUser(state, user) {
        console.log("USTAWIAM USERA W STORZE");
        state.currentUser = user;
        console.log(state.currentUser);
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}