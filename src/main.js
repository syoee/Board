import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import axios from "axios";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.mount("#app");
