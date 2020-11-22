import axios from "axios";

const baseDomain = "http://localhost:8081";
const baseURL = `${baseDomain}`; // Incase of /api/v1;
const token = localStorage.getItem("user-token");
const authHeaders = {
    "Authorization": "Bearer " + token
};
const emptyHeaders = {};
// ALL DEFUALT CONFIGURATION HERE

export default axios.create({
    baseURL,
    headers: getHeaders()
});

function getHeaders() {
    if (token != null) {
        return authHeaders;
    } else return emptyHeaders;
}