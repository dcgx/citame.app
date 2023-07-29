<template>
  <div class="form-control">
    <input
      type="text"
      placeholder="Verificar código"
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
