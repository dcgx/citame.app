import { defineStore } from "pinia";

export const useCompanyStore = defineStore("company", {
  state: () => ({
    companies: [
      {
        id: 1,
        name: "Company 1",
      },
    ],
  }),

  actions: {
    async getAllCompanies() {
      // GET api/companies/all?query=...
    },
    async getMeCompanies(id) {
      // GET api/v1/companies/me
    },
    async getCompany(id) {
      // GET api/v1/companies/{companyId}
    },
    async getInfoAppointmentByCompany() {
      // GET api/v1/companies/{companyId}/info-appointment
    }
  },
});
