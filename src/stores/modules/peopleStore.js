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
    personalizationData: {
        interests: [],
        preferredGenderToMeet: [],
        preferredAgeToMeetFrom: 18,
        preferredAgeToMeetTo: 80
    },
    step: null,
    username: "",
    image: {
        image: null
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
    },
    registerPersonalizationData({ state }) {
        return UserRepository.registerPersonalizationData(state.personalizationData)
            .then(response => {
                console.log(response);
                return response.data;
            })
            .catch(error => {
                return error.response;
            });
    },
    uploadImage({ state }) {
        const fd = new FormData();
        fd.append('image', state.image.image)
        console.log("halo")
        console.log(state.image.image)
        console.log(fd)
        return UserRepository.uploadImage(fd)
            .then(response => {
                console.log("halo2")
                console.log(response);
            })
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
    setImage(state, image) {
        state.image.image = image;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}