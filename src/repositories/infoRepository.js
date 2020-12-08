import Client from './axiosClient';
const resource = '/info';

export default {
    getInterests() {
        return Client.get(`${resource}/interests`);
    },
    getCategories() {
        return Client.get(`${resource}/categories`);
    },
};