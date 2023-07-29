<template>
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
    <button>Ya tengo un código</button>
  </div>
</template>

<script setup>
import { authStore } from "@/stores/auth";
</script>
