<template>
  <div class="map-container col-span-4 md:col-span-5">
    <div id="map"></div>
  </div>
  <!-- <div id="map" class="col-span-4 md:col-span-5"></div> -->
</template>

<script setup>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

onMounted(() => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGNneCIsImEiOiJjbGw4ejlzdTAwN21kM2Ruemc2ajZvajE4In0.nQe156uUiuob0WmXqk1MRg";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: [-92.25, 37.75],
    zoom: 2,
    fog: {
      range: [0.8, 8],
      color: "#dc9f9f",
      "horizon-blend": 0.5,
      "high-color": "#245bde",
      "space-color": "#000000",
      "star-intensity": 0.15,
    },
    projection: {
      name: "globe",
    }, // starting projection
  });
});
</script>

<style>
.map-container {
  position: sticky;
  left: unset;
  top: 94px;
  right: 0;
  width: 100%;
  height: calc(100vh - 94px);
}
.map-container #map {
  width: 100%;
  height: 100%;
}
</style>
