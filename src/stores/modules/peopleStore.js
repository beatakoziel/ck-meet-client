import Repository from "../../repositories/repositoryFactory"

const UserRepository = Repository.get("users");

// initial state
const getDefaultState = () => ({
    people: [],
    currentUser: null,
    currentLoggedUser: null,
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
        interestsObjects: [],
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
const state = getDefaultState()

// getters
const getters = {}

// actions
const actions = {
    getPeople({commit}) {
        UserRepository.get().then(res => {
            commit('setPeople', res.data)
        });
    },
    currentUser({commit}) {
        UserRepository.currentUser()
            .then(res => {
                commit('setCurrentLoggedUser', res.data)
            });
    },
    deleteAccount() {
        return UserRepository.deleteAccount()
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            });
    },
    registerPersonalData({state}) {
        return UserRepository.registerPersonalData(state.personalData)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error.response;
            });
    },
    registerPersonalizationData({state}) {
        return UserRepository.registerPersonalizationData(state.personalizationData)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response;
            });
    },
    uploadImage({state}) {
        const fd = new FormData();
        fd.append('image', state.image.image)
        return UserRepository.uploadImage(fd);
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
        state.image.image = user.avatar.data
    },
    setCurrentLoggedUser(state, user) {
        state.personalData.nickname = user.nickname;
        state.personalData.description = user.description;
        state.personalData.dateOfBirth = user.dateOfBirth;
        state.personalData.email = user.contactData.email;
        state.personalData.phoneNumber = user.contactData.phoneNumber
        state.personalData.linkToFacebookProfile = user.contactData.linkToFacebookProfile
        state.personalData.gender = user.gender
        state.personalizationData.interestsObjects = user.interests
        for (let i = 0; i < user.interests.length; i++) {
            state.personalizationData.interests.push(user.interests[i].key)
        }
        state.personalizationData.preferredGenderToMeet = user.preferredGenderToMeet
        state.personalizationData.preferredAgeToMeetFrom = user.preferredAgeToMeetFrom
        state.personalizationData.preferredAgeToMeetTo = user.preferredAgeToMeetTo
        state.image.image = user.avatar == null ? null : user.avatar.data
        state.currentLoggedUser = user
    },
    resetState() {
        Object.assign(state, getDefaultState())
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