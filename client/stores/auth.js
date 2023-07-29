import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  actions: {
    async sendCode() {
      // POST api/auth/send-code
    },
    async verifyCode() {
      // POST api/auth/verify-code
    },
    async loginWithGoogle() {
      // POST api/auth/login/google
    },
    async loginWithFacebook() {
      // POST api/auth/login/facebook
    },
    async logout() {
      // POST api/auth/logout
    },
    async me() {
      // GET api/auth/me
    },
    async sendResetPassword() {
      // POST api/auth/send-reset-password
    },
  },
});
