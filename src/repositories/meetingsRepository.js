import Client from './axiosClient';
const resource = '/meetings';

export default {
    get() {
        return Client.get(`${resource}`);
    }
};