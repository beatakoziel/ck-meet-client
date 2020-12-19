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
        let contentObj = {
            content: content
        }
        return Client.post(`${resource}/${id}/comment`, contentObj);
    },
    deleteComment(meetingId, commentId) {
        return Client.delete(`${resource}/${meetingId}/comment/${commentId}`);
    }
};