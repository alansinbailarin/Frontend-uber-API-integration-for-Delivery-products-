import "./assets/main.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { markRaw } from "vue";
import { createApp } from "vue/dist/vue.esm-bundler";
import { createPinia } from "pinia";
import createPersistedState from "pinia-plugin-persistedstate";
import { MotionPlugin } from "@vueuse/motion";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "ldrs/ring";

window.axios = axios;
window.axios.defaults.baseURL = import.meta.env.VITE_API_URL_DEV;
window.axios.defaults.headers.common["Accept"] = "application/json";
window.axios.defaults.headers.common["Content-Type"] = "application/json";
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

window.axios.defaults.withCredentials = true;

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
pinia.use(createPersistedState);
app.use(pinia);
app.use(router);
app.use(i18n);
app.use(MotionPlugin);
app.mount("#app");
