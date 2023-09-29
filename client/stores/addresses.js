import { defineStore } from "pinia";

export const useAddressStore = defineStore("addresses", {
  state: () => ({
    addresses: [
      {
        id: "ChIJL68lBEHFYpYRMQkPQDzVdYQ",
        description: "Santiago, Chile",
        title: "Santiago",
      }
    ],
    lastAddresses: JSON.parse(localStorage.getItem("lastAddresses")) || [],
    selectedAddress: null,
    isFetching: false,
  }),

  getters: {
    hasLastAddresses() {
      return this.lastAddresses.length > 0;
    }
  },

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
