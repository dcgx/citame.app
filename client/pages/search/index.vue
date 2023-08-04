<template>
  <div class="flex flex-col">
    <header class="bg-white text-black py-6 px-5 fixed left-0 right-0 top-0">
      <div class="sticky flex items-center justify-between text-xl">
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

    <section class="grid grid-cols-6 md:grid-cols-8 h-screen">
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
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star"
                checked
              />
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
                <div class="col-span-1 text-xl flex items-center">
                  14.990 CLP
                </div>
                <div class="text-slate-400">45 min</div>
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div class="bg-slate-100 rounded-sm col-span-4 md:col-span-5">Map</div>
    </section>
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
