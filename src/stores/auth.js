import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({ authUser: null, authToken: null }),
  getters: {
    user: (state) => state.authUser,
    token: (state) => state.authToken,
  },
  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },
    async login(form) {
      await this.getToken();
      await axios
        .post("/api/auth/login", form)
        .then((res) => {
          this.authToken = res.data.token;
          this.authUser = res.data.data;
          const locale = this.router.currentRoute.value.params.locale;

          this.router.push({ name: "home", params: { locale: locale } });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async register(form) {
      await this.getToken();
      await axios
        .post("/api/auth/register", form)
        .then((res) => {
          const locale = this.router.currentRoute.value.params.locale;

          this.router.push({ name: "login", params: { locale: locale } });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async logout() {
      await axios.get("/api/auth/logout", this.authToken);
      const locale = this.router.currentRoute.value.params.locale;

      this.authUser = null;
      this.authToken = null;
      this.router.push({ name: "login", params: { locale: locale } });
    },
  },

  persist: true,
});
