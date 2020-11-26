import axios from "axios";
import { router } from '../main'
const baseDomain = "http://localhost:8081";
const baseURL = `${baseDomain}`; // Incase of /api/v1;
// ALL DEFUALT CONFIGURATION HERE

const client = axios.create({
    baseURL
});

client.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status == 403) {
        router.push({ name: "Auth" });
    }
    return Promise.reject(error);
})

client.interceptors.request.use((config) => {
    let token = localStorage.getItem("user-token")
    console.log(token)
    if (token) {
        config.headers.Authorization = "Bearer " + token
    }
    return config
}, (err) => {
    console.log(err)
    return Promise.reject(err)
})

export default client;

