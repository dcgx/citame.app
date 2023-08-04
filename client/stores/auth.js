import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    sendCodeEmail: null,
    isSendingCode: false,
    isSendingFailed: false,
    isAlreadySentCode: false,
  }),
  actions: {
    async sendCode(email) {
      this.isSendingCode = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isSendingCode = false;
          this.isSendingFailed = false;
          this.isAlreadySentCode = true;
          this.sendCodeEmail = email;
          resolve();
        }, 2000);
      });
      // POST api/auth/send-code
    },
    async verifyCode() {
      // POST api/auth/verify-code
    },
    async login() {},
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
