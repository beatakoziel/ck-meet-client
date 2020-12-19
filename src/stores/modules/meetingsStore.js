import Repository from "../../repositories/repositoryFactory"

const MeetingsRepository = Repository.get("meetings");

// initial state
const state = () => ({
    meetings: [],
    currentMeeting: null
})

// getters
const getters = {}

// actions
const actions = {
    getMeetings({commit}) {
        return MeetingsRepository.get().then(response => {
            commit('setMeetings', response.data)
            return response;
        })
    },
    addMeeting({dispatch}, meeting) {
        return MeetingsRepository.add(meeting).then(response => {
            dispatch('getMeetings');
            return response;
        })
    },
    editMeeting({dispatch}, {meetingId, meeting}) {
        return MeetingsRepository.update(meetingId, meeting).then(response => {
            dispatch('getMeetings');
            return response;
        })
    },
    addComment({commit}, {meetingId, content}) {
        return MeetingsRepository.addComment(meetingId, content).then(response => {
            commit('setComments', response.data);
            return response;
        })
    },
    deleteComment({commit}, {meetingId, commentId}) {
        return MeetingsRepository.deleteComment(meetingId, commentId).then(response => {
            commit('setComments', response.data);
            return response;
        })
    },
    deleteMeeting({dispatch}, meetingId) {
        return MeetingsRepository.delete(meetingId).then(response => {
            dispatch('getMeetings');
            return response;
        })
    },
    participate({dispatch, commit}, meetingId) {
        return MeetingsRepository.participate(meetingId).then(response => {
            dispatch('getMeetings');
            commit("setCurrentViewedMeeting", response.data);
            return response;
        })
    },
    cancelParticipation({dispatch, commit}, meetingId) {
        return MeetingsRepository.cancelParticipation(meetingId).then(response => {
            dispatch('getMeetings');
            commit("setCurrentViewedMeeting", response.data);
            return response;
        })
    }
}

// mutations
const mutations = {
    setMeetings(state, meetings) {
        state.meetings = meetings
    },
    setComments(state, comments) {
        state.currentMeeting.comments = comments;
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