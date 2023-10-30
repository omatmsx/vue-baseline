import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

axios.interceptors.request.use((config) => {
    // Modify the request config here
    return config;
});

axios.interceptors.response.use(
    (response) => {
        // Handle the response here
        return response;
    },
    (error) => {
        // Handle errors here
        console.error(error);
        return Promise.reject(error);
    },
);

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.use(createPinia());
app.use(router);

app.mount("#app");
