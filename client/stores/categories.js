import { defineStore } from "pinia";

export const useCategoryStore = defineStore("categories", {
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
    isFetching: false,
  }),

  actions: {
    async search(query) {
      this.isFetching = true;
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log({ query });
          resolve();
        }, 1000);
      });

      this.isFetching = false;
    },
  },
});
