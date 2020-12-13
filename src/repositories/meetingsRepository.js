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
    },
    participate(id) {
        return Client.post(`${resource}/${id}/participate`);
    },
    cancelParticipation(id) {
        return Client.post(`${resource}/${id}/cancel`);
    },
    addComment(id, content) {
        return Client.post(`${resource}/${id}/comment`, content);
    },
    deleteComment(id, content) {
        return Client.delete(`${resource}/${id}/comment`, content);
    }
};