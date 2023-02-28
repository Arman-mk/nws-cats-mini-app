import axios from 'axios';
import {API_URL} from "../constants/app.js";

console.log("API_URL", API_URL);
const client = axios.create({ baseURL: API_URL });

client.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { status } = error;
        if (status >= 500) {
            console.log(error);
        }
        if (status === 401) {
            console.log('all session is destroyed');
        }
        return Promise.reject(error);
    }
);

export default client;