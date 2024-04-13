import { createSSRApp } from "vue";
import uView from "./uni_modules/vk-uview-ui";
import "./uni.scss";
import App from "./App.vue";
import store from "./store/index";
import piniaPersist from "pinia-plugin-persist-uni";
store.use(piniaPersist);
export function createApp() {
  const app = createSSRApp(App);
  app.use(store);
  app.use(uView);
  return {
    app,
  };
}
