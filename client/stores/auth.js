import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  actions: {
    async login() {},
    async logout() {},
    async me() {},
    async sendResetPassword() {},
  },
});
