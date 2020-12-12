import Repository from "../../repositories/repositoryFactory"
const MeetingsRepository = Repository.get("meetings");

// initial state
const state = () => ({
    meetings: [],
    currentMeeting: null
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
    addMeeting({ dispatch }, meeting) {
        return MeetingsRepository.add(meeting).then(response => {
            dispatch('getMeetings');
            return response.data;
        })
    },
    editMeeting({ dispatch },meetingId, meeting) {
        return MeetingsRepository.edit(meetingId, meeting).then(response => {
            dispatch('getMeetings');
            return response.data;
        })
    },
    deleteMeeting({ dispatch },meetingId) {
        return MeetingsRepository.delete(meetingId).then(response => {
            dispatch('getMeetings');
            return response.data;
        })
    }
}

// mutations
const mutations = {
    setMeetings(state, meetings) {
        state.meetings = meetings
    },
    setCurrentViewedMeeting(state, meeting) {
        state.currentMeeting = meeting;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}