import Client from './axiosClient';
const resource = '/meetings';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    add(meeting) {
        return Client.post(`${resource}`, meeting);
    },
    edit(id, meeting) {
        return Client.put(`${resource}/${id}`, meeting);
    },
    delete(id, meeting) {
        return Client.delete(`${resource}/${id}`, meeting);
    }
};