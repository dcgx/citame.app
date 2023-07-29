import { defineStore } from "pinia";

export const useApiStore = defineStore("api", {
  state: () => ({
    isLoading: false,
    isFailed: false,
    errors: [],
    status: null,
    statusCode: 0,
  }),
});
