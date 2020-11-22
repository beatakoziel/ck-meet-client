import Client from './axiosClient';

export default {
    login(payload) {
        return Client.post(`login`, payload);
    },
    register(payload) {
        return Client.post(`register`, payload);
    },
};