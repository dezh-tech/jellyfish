import useProfileStore from "@/stores/profile-store";
import axios from "axios";

const BASE_URL = "https://nostr.eco/seasnail/";

export const mainApi = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor
const requestInterceptor = (config: any) => {
    const token = useProfileStore.getState().token;

    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
};

// Response interceptor
const responseInterceptor = (response: any) => {
    return response.data;
};

const errorInterceptor = (error: any) => {
    if (error.response?.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem("profile-storage");
        window.location.href = "/";
    }
    return Promise.reject(error);
};

// Apply interceptors to both API instances

mainApi.interceptors.request.use(requestInterceptor);
mainApi.interceptors.response.use(responseInterceptor, errorInterceptor);
