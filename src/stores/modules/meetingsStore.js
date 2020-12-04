import Repository from "../../repositories/repositoryFactory"
const MeetingsRepository = Repository.get("meetings");

// initial state
const state = () => ({
    meetings: []
})

// getters
const getters = {
}

// actions
const actions = {
    getMeetings({ commit }) {
        return MeetingsRepository.get().then(response => {
            commit('setMeetings', response.data)
            return response;
        })
    },
}

// mutations
const mutations = {
    setMeetings(state, meetings) {
        state.meetings = meetings
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}