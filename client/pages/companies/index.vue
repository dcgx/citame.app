<template>
  <div>
    <header class="border border-red-800 py-8"></header>
    <div class="flex items-center justify-center h-full flex-col gap-5">
      <h2>Mis Empresas</h2>

      <div
        class="block max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="py-4 cursor-pointer" v-for="company in companies">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ company.name }}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCompanyStore } from "@/stores/companies";

const companyStore = useCompanyStore();
const companies = companyStore.companies;
</script>
