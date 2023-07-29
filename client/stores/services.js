import { defineStore } from "pinia";

export const useServiceStore = defineStore("services", {
  state: () => ({}),
  actions: {
    async getInfoAppointmentByService() {
      // GET api/v1/services/{serviceId}/info-appointment
    },
  },
});
