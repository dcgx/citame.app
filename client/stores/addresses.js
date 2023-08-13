import { defineStore } from "pinia";

export const useAddressStore = defineStore("addresses", {
  state: () => ({
    addresses: [],
    selectedAddress: null,
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
