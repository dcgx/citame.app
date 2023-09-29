<template>
  <div class="map-container col-span-6 md:col-span-6">
    <div id="map"></div>
  </div>
  <!-- <div id="map" class="col-span-4 md:col-span-5"></div> -->
</template>

<script setup>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const route = useRoute();

console.log({ route });

onMounted(() => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZGNneCIsImEiOiJjbGw4ejlzdTAwN21kM2Ruemc2ajZvajE4In0.nQe156uUiuob0WmXqk1MRg";
  const center = route.query.center.split(",").map((c) => parseFloat(c));
  console.log(center);
  // const geojson = {
  //   type: "FeatureCollection",
  //   features: [
  //     {
  //       type: "Feature",
  //       properties: {
  //         message: "Foo",
  //         iconSize: [60, 60],
  //       },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-66.324462, -16.024695],
  //       },
  //       popup: {
  //         image:
  //           "https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg",
  //         title: "Washington Monument",
  //         description: "Construction on the Washington Monument began in 1848.",
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: {
  //         message: "Bar",
  //         iconSize: [50, 50],
  //       },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-61.21582, -15.971891],
  //       },
  //       popup: {
  //         image:
  //           "https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg",
  //         title: "Washington Monument",
  //         description: "Construction on the Washington Monument began in 1848.",
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       properties: {
  //         message: "Baz",
  //         iconSize: [40, 40],
  //       },
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-63.292236, -18.281518],
  //       },
  //       popup: {
  //         image:
  //           "https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg",
  //         title: "Washington Monument",
  //         description: "Construction on the Washington Monument began in 1848.",
  //       },
  //     },
  //   ],
  // };

  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: center,
    zoom: 6,
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

  map.on("load", () => {
    console.log('load???')
    // Add a new source from our GeoJSON data and
    // set the 'cluster' option to true. GL-JS will
    // add the point_count property to your source data.
    map.addSource("earthquakes", {
      type: "geojson",
      // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
      // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
      data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
      cluster: true,
      clusterMaxZoom: 14, // Max zoom to cluster points on
      clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
    });

    map.addLayer({
      id: "clusters",
      type: "circle",
      source: "earthquakes",
      filter: ["has", "point_count"],
      paint: {
        // Use step expressions (https://docs.mapbox.com/style-spec/reference/expressions/#step)
        // with three steps to implement three types of circles:
        //   * Blue, 20px circles when point count is less than 100
        //   * Yellow, 30px circles when point count is between 100 and 750
        //   * Pink, 40px circles when point count is greater than or equal to 750
        "circle-color": [
          "step",
          ["get", "point_count"],
          "#51bbd6",
          100,
          "#f1f075",
          750,
          "#f28cb1",
        ],
        "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
      },
    });

    map.addLayer({
      id: "cluster-count",
      type: "symbol",
      source: "earthquakes",
      filter: ["has", "point_count"],
      layout: {
        "text-field": ["get", "point_count_abbreviated"],
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        "text-size": 12,
      },
    });

    map.addLayer({
      id: "unclustered-point",
      type: "circle",
      source: "earthquakes",
      filter: ["!", ["has", "point_count"]],
      paint: {
        "circle-color": "#11b4da",
        "circle-radius": 4,
        "circle-stroke-width": 1,
        "circle-stroke-color": "#fff",
      },
    });

    // inspect a cluster on click
    map.on("click", "clusters", (e) => {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["clusters"],
      });
      const clusterId = features[0].properties.cluster_id;
      map
        .getSource("earthquakes")
        .getClusterExpansionZoom(clusterId, (err, zoom) => {
          if (err) return;

          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom,
          });
        });
    });

    // When a click event occurs on a feature in
    // the unclustered-point layer, open a popup at
    // the location of the feature, with
    // description HTML from its properties.
    map.on("click", "unclustered-point", (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const mag = e.features[0].properties.mag;
      const tsunami = e.features[0].properties.tsunami === 1 ? "yes" : "no";

      // Ensure that if the map is zoomed out such that
      // multiple copies of the feature are visible, the
      // popup appears over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`magnitude: ${mag}<br>Was there a tsunami?: ${tsunami}`)
        .addTo(map);
    });

    map.on("mouseenter", "clusters", () => {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "clusters", () => {
      map.getCanvas().style.cursor = "";
    });
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

#marker {
  background-image: url("https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
}
</style>
