import { defineStore } from "pinia";

export const useAppointmentStore = defineStore("appointments", {
  state: () => ({}),
  actions: {
    async getAppointment() {
      // GET api/appointments/{id}
    },
    async getMeAppointments() {
      // GET api/appointments/me?canceled=false
    },
  },
});
