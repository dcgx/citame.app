<template>
  <div class="bg-white col-span-2 md:col-span-3 pt-24">
    <article
      v-for="location in locations"
      class="grid place-content-center my-8 px-10"
    >
      <div class="flex items-center justify-center">
        <img
          class="rounded-lg w-full"
          src="https://images.fresha.com/locations/location-profile-images/441094/487711/1498ebf3-2fa9-413b-9ee5-fa13b59550d2.jpg?class=width-small"
          alt=""
        />
      </div>
      <span class="font-semibold text-black text-xl mt-2">Bella Vita</span>
      <div
        class="flex items-center gap-2 font-ligh text-slate-600 text-xl mt-2"
      >
        <span>5.0</span>
        <div class="rating">
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" checked />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
          <input type="radio" name="rating-1" class="mask mask-star" />
        </div>
        (50)
      </div>

      <span>Providencia, Providencia</span>

      <div class="mt-2 border-b border-gray-300"></div>
      <div class="py-4">
        <ul>
          <li class="grid grid-cols-4 gap-4 my-2 text-slate-700 text-lg">
            <div class="col-span-3 pr-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div class="col-span-1 text-xl flex items-center">14.990 CLP</div>
            <div class="text-slate-400">45 min</div>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script setup>
const locations = [
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
  { id: 1, name: "Peluqueria Canina Dogo" },
];
</script>
