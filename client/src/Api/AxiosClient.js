import axios from "axios";
import store from "../Redux/Store";

const AxiosClient = axios.create({
    baseURL: "https://fphone-api.vercel.app/api/",
});

AxiosClient.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token;
        //    wait for the token to be loaded from the local storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

AxiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default AxiosClient;

