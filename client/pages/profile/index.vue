<template>
  <div>
    <header class="border border-red-800 py-8"></header>
    <div class="flex items-center justify-center h-full flex-col gap-5">
      <h2>Mis Empresas</h2>

      <div
        class="block max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="tabs text-white font-semibold tabs-boxed">
          <a class="tab tab-lg">Datos</a>
          <a class="tab tab-lg tab-active">Invitaciones</a>
          <a class="tab tab-lg">Vinculaciones</a>
        </div>

        <div class="grid grid-cols-2">
          <form class="my-5">
            <input
              type="text"
              v-model="account.name"
              placeholder="Nombre(s)"
              class="input input-bordered w-full my-3"
            />

            <input
              type="text"
              placeholder="Apellido(s)"
              class="input input-bordered w-full my-3"
            />

            <input
              type="text"
              placeholder="Email"
              class="input input-bordered w-full my-3"
            />

            <input
              type="text"
              placeholder="Documento"
              class="input input-bordered w-full my-3"
            />

            <input
              type="text"
              placeholder="Número"
              class="input input-bordered w-full my-3"
            />

            <button class="btn my-5">Guardar cambios</button>
          </form>

          <div class="flex items-center justify-center">
            <img
              class="mask mask-circle"
              src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProfileStore } from "@/stores/profile";
const profileStore = useProfileStore();

const account = profileStore.account;
</script>
