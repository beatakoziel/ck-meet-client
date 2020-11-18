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
    update(id, payload) {
        return Client.put(`${resource}/${id}`, payload);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`)
    }
};