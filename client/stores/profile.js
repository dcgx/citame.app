import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    profile: {
      account: {
        id: 1,
        name: "John Doe",
        email: "email@email.com",
      },
    },
    profileUrl: null,
  }),

  actions: {
    updateProfile(profile) {
      // PUT api/profile
    }
  }
});
