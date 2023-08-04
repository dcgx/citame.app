<template>
  <div class="w-full px-10">
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
        <button class="btn bg-black px-4 rounded-full" @click="handleClick">
          Buscar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["search"]);

const handleClick = () => {
  emit("search");
};

</script>
