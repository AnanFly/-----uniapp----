import { defineStore } from "pinia";
export const userStore = defineStore({
  id: "store",
  state: () => ({
    currentTab: 0,
  }),
  getters: {
    getCurrentTab(): number {
      console.log("this", this);

      return this.currentTab;
    },
  },
  actions: {
    setCurrentTab(index) {
      this.currentTab = index;
    },
  },
  persist: {
    enabled: true, // 开启持久化
    // strategies
    strategies: [
      {
        storage: localStorage, // 默认是sessionStorage
        // 修改为localStorage
        key: "user_store", // 本地存储的key
        paths: ["user_name", "currentTab"], // 持久化的数据
      },
    ],
  },
});
