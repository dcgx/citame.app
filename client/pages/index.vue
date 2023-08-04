<template>
  <div class="absolute right-0">
    <button
      @click="showLoginModal"
      class="my-5 mx-3 inline-block cursor-pointer rounded-full bg-gray-100 px-4 py-2 text-center text-sm font-semibold text-black transition duration-200 ease-in-out hover:bg-gray-100"
    >
      Iniciar sesión
    </button>
  </div>
  <div class="grid grid-cols-5">
    <div
      class="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-900 h-screen col-span-2 flex items-center justify-center flex-col"
    >
      <h1 class="text-4xl font-semibold my-2 text-white">
        Llena tu agenda de citas,
      </h1>
      <h2 class="text-4xl font-semibold my-2 text-yellow-300">
        incluso cuando duermes
      </h2>
    </div>
    <div
      class="bg-gradient-to-r from-black via-black to-slate-800 h-screen col-span-3 flex items-center flex-col justify-center gap-5"
      style="border-left: 2px solid #172554"
    >
      <div class="w-full px-10 ">
        <div class="bg-white px-5 py-3 rounded-full text-black grid grid-cols-2">
          <select class="bg-transparent">
            <option disabled selected>Cabello y peinado</option>
            <option>Uñas</option>
            <option>Barbería</option>
          </select>
          <div class="flex">
            <input
              type="text"
              placeholder="john@cita.me"
              class="bg-transparent w-full px-4 text-black focus-visible:border focus-visible:border-white"
            />
            <button class="btn bg-black px-4 rounded-full">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <dialog id="loginModal" class="modal">
    <div method="dialog" class="modal-box">
      <div class="grid grid-cols-2 text-center my-3">
        <div>
          <button
            type="button"
            class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook-f"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
              ></path>
            </svg>
            Acceder con Facebook
          </button>
        </div>

        <div>
          <button
            type="button"
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Acceder con Google
          </button>
        </div>
      </div>

      <div class="w-full">
        <div class="form-control">
          <h3
            class="text-center font-semibold uppercase text-white border-t border-t-gray-600 pt-4"
          >
            Acceder con Email
          </h3>
          <input
            type="text"
            v-model="sendCodeEmail"
            placeholder="john@cita.me"
            class="input input-bordered w-full"
          />

          <input
            v-if="authStore.isAlreadySentCode"
            type="text"
            placeholder="Ingresa tu codigo"
            class="input input-bordered w-full"
          />

          <button
            @click="sendCode"
            class="inline-block my-3 cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800"
          >
            <span
              v-if="authStore.isSendingCode"
              class="loading loading-spinner loading-sm"
            ></span>

            <span v-else> Enviarme un código </span>
          </button>

          <button v-if="authStore.isAlreadySentCode">Verificar código</button>
          <button v-else>Ya tengo un código</button>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref } from "vue";
import { useNuxtApp } from "#app";
import { useAuthStore } from "@/stores/auth";

const { $toast } = useNuxtApp();

const authStore = useAuthStore();

const sendCodeEmail = ref("");

const sendCode = () => {
  console.log($toast, "toast");
  return authStore.sendCode(sendCodeEmail.value).then(() => {
    $toast.success("Hemos enviado un código a tu email");
  });
};

const showLoginModal = () => {
  window.loginModal.showModal();
};
</script>
