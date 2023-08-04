<template>
  <header class="bg-white text-black py-6 px-5 fixed left-0 right-0 top-0">
    <div class="sticky flex items-center justify-between text-lg">
      <div>Logo</div>
      <div
        class="bg-white px-10 py-5 rounded-full border border-slate-600 text-black grid grid-cols-2"
      >
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
        </div>
      </div>
      <div>Logo</div>
    </div>
  </header>
</template>
