import Repository from "../../repositories/repositoryFactory"

const RelationshipRepository = Repository.get("relationship");

// initial state
const state = () => ({
    relationships: []
})

// getters
const getters = {}

// actions
const actions = {
    getRelationships({commit}) {
        return RelationshipRepository.getRelationships().then(response => {
            commit('setRelationships', response.data)
            return response.data;
        }).catch(error => {
            return error.response;
        });
    },
    sayHello({dispatch}, id) {
        return RelationshipRepository.sayHello(id).then(response => {
            dispatch('getRelationships', response.data)
            return response.data;
        }).catch(error => {
            return error.response;
        });
    },
    revertHello({dispatch}, id) {
        return RelationshipRepository.revertHello(id).then(response => {
            dispatch('getRelationships', response.data)
            return response.data;
        }).catch(error => {
            return error.response;
        });
    },
}

// mutations
const mutations = {
    setRelationships(state, relationships) {
        state.relationships = relationships
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}