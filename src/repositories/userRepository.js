import Client from './axiosClient';
const resource = '/users';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    getUser(id) {
        return Client.get(`${resource}/${id}`);
    },
    create(payload) {
        return Client.post(`${resource}`, payload);
    },
    registerPersonalData(payload) {
        return Client.put(`${resource}/data`, payload);
    },
    registerPersonalizationData(payload) {
        return Client.put(`${resource}/personalization`, payload);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`)
    },
    status() {
        return Client.get(`${resource}/status`);
    },
    currentUserName() {
        return Client.get(`${resource}/current`);
    },
    uploadImage(payload) {
        return Client.post(`${resource}/avatar`, payload);
    }
};