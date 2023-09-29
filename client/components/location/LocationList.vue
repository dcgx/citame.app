<template>
  <div class="bg-white col-span-2 md:col-span-2 px-10 pt-28">
    <h2 class="font-light text-slate-600">43 establecimientos cerca de ti</h2>
    <article
      v-for="location in locations"
      class="grid place-content-center my-8"
    >
      <div class="relative">
        <!-- <img
          class="rounded-lg w-full"
          src="https://images.fresha.com/locations/location-profile-images/441094/487711/1498ebf3-2fa9-413b-9ee5-fa13b59550d2.jpg?class=width-small"
          alt=""
        /> -->
        <div class="carousel w-full">
          <div id="item1" class="carousel-item w-full">
            <img
              src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="w-full"
            />
          </div>
          <div id="item2" class="carousel-item w-full">
            <img
              src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="w-full"
            />
          </div>
          <div id="item3" class="carousel-item w-full">
            <img
              src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="w-full"
            />
          </div>
          <div id="item4" class="carousel-item w-full">
            <img
              src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="w-full"
            />
          </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2 absolute bottom-2">
          <a href="#item1" class="bg-gray-300 w-2 h-2 rounded-full"></a>
          <a href="#item2" class="bg-gray-300 w-2 h-2 rounded-full"></a>
          <a href="#item3" class="bg-gray-300 w-2 h-2 rounded-full"></a>
          <a href="#item4" class="bg-gray-300 w-2 h-2 rounded-full"></a>
        </div>
      </div>
      <span class="font-semibold text-black text-lg mt-2">Bella Vita</span>
      <div
        class="flex items-center gap-2 font-ligh text-slate-600 text-lg mt-2"
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
          <li class="grid grid-cols-4 gap-4 my-2 text-slate-700 text-md">
            <div class="col-span-3 pr-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
            <div class="col-span-1 text-lg flex items-center">14.990 CLP</div>
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
