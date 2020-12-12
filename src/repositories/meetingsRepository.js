import Client from './axiosClient';
const resource = '/meetings';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    add(meeting) {
        return Client.post(`${resource}`, meeting);
    },
    update(id, meeting) {
        console.log(meeting)
        return Client.put(`${resource}/${id}`, meeting);
    },
    delete(id) {
        return Client.delete(`${resource}/${id}`);
    }
};