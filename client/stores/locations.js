import { defineStore } from "pinia";

export const useLocationStore = defineStore("location", {
  state: () => ({
    locations: [
      {
        id: 1,
        name: "Company 1",
      },
    ],
  }),

  actions: {
    async getAllLocations() {
      // GET api/locations/all?query=...
    },
  },
});
