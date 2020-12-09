import Client from './axiosClient';

const resource = '/relationship';

export default {
    getRelationships() {
        return Client.get(`${resource}`);
    },
    sayHello(id) {
        return Client.post(`${resource}/${id}`);
    },
    revertHello(id) {
        return Client.put(`${resource}/revert/${id}`);
    },
};