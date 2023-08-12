import { defineStore } from "pinia";

export const useLocationStore = defineStore("location", {
  state: () => ({
    featuredCategories: [
      {
        id: 1,
        name: "Cabello y peinado",
      },
      {
        id: 2,
        name: "Uñas",
      },
      {
        id: 3,
        name: "Cejas y pestañas",
      },
      {
        id: 4,
        name: "Masaje",
      },
      {
        id: 5,
        name: "Barberia",
      },
      {
        id: 6,
        name: "Depilación",
      },
    ],
  }),

  actions: {
    async getAllCategories() {
      // GET api/locations/all?query=...
    },
  },
});
