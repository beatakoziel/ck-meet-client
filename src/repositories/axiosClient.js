import axios from "axios";
import { router } from '../main'
const baseDomain = "http://localhost:8081";
const baseURL = `${baseDomain}`; // Incase of /api/v1;
import authStore from '../stores/modules/authStore'
// ALL DEFUALT CONFIGURATION HERE

const client = axios.create({
    baseURL
});

client.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status == 403) {
        authStore.mutations.logout();
        router.push({ name: "Auth" });
    }
    return Promise.reject(error);
})

client.interceptors.request.use((config) => {
    let token = localStorage.getItem("user-token")
    if (token) {
        config.headers.Authorization = "Bearer " + token
    }
    return config
}, (err) => {
    return Promise.reject(err)
})

export default client;

