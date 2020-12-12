import Client from './axiosClient';
const resource = '/meetings';

export default {
    get() {
        return Client.get(`${resource}`);
    },
    add(meeting) {
        return Client.post(`${resource}`, meeting);
    }
};