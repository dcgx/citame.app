<template>
  <div class="w-full px-10">
    <div class="bg-white px-5 py-3 rounded-full text-black grid grid-cols-2">
      <a-select
        show-search
        placeholder="Seleccionar categoria"
        v-model:value="category"
        @change="handleChangeCategory"
        @search="handleSearchCategory"
      >
        <template v-if="categoryStore.isFetching" #notFoundContent>
          <a-spin size="small" />
        </template>

        <a-select-opt-group>
          <template #label>
            <span> Categorias destacadas </span>
          </template>
          <a-select-option
            v-for="category in categoryStore.featuredCategories"
            :value="category.id"
            >{{ category.name }}</a-select-option
          >
        </a-select-opt-group>
      </a-select>
      <div class="flex">
        <a-select
          class="w-full"
          show-search
          placeholder="Ubicación"
          :not-found-content="addressStore.isFetching ? undefined : null"
          v-model:value="location"
          @search="handleSearchLocation"
        >
          <template v-if="addressStore.isFetching" #notFoundContent>
            <a-spin size="small" />
          </template>

          <a-select-opt-group>
            <template #label>
              <span> Últimas ubicaciones </span>
            </template>
            <a-select-option
              v-for="address in addressStore.featuredCategories"
              :value="address.id"
              >{{ address.name }}</a-select-option
            >
          </a-select-opt-group>
        </a-select>
        <button
          class="btn bg-black px-4 rounded-full"
          @click="handleSearchClick"
        >
          <span
            v-if="isSubmitting"
            class="loading loading-spinner loading-sm "
          ></span>
          <span v-else>Buscar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategoryStore } from "@/stores/categories";
import { useAddressStore } from "@/stores/addresses";

const categoryStore = useCategoryStore();
const addressStore = useAddressStore();

const category = ref("");
const location = ref("");

const isSubmitting = ref(false);

const emit = defineEmits(["search"]);

const handleChangeCategory = (value) => {
  console.log(`selected ${value}`);
};
const handleSearchCategory = () => {
  return categoryStore.search(category.value);
};
const handleSearchLocation = () => {
  return addressStore.search(location.value);
};

const handleSearchClick = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
    emit("search");
  }, 2000);
};
</script>
