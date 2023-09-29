<template>
  <div class="px-10" :class="{ 'w-full': fullWidth }">
    <div
      class="bg-white px-5 py-2 rounded-full text-black grid grid-cols-2 border border-gray-400"
    >
      <a-select
        show-search
        placeholder="Seleccionar categoria"
        v-model:value="form.category"
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
          v-model:value="form.location"
          @search="handleSearchLocation"
        >
          <template v-if="addressStore.isFetching" #notFoundContent>
            <a-spin size="small" />
          </template>

          <a-select-opt-group>
            <template v-if="hasLastAddresses" #label>
              <span> Últimas ubicaciones </span>
            </template>
            <a-select-option
              v-for="address in addressStore.addresses"
              :value="address.id"
              >{{ address.description }}</a-select-option
            >
          </a-select-opt-group>
        </a-select>
        <button
          v-if="showButton"
          class="bg-black rounded-full"
          @click="handleSearchClick"
          :disabled="$v.$invalid || isSubmitting"
        >
          <span
            v-if="isSubmitting"
            class="loading loading-spinner loading-sm"
          ></span>
          <span v-else>Buscar</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useCategoryStore } from "@/stores/categories";
import { useAddressStore } from "@/stores/addresses";

const props = defineProps([
  "showButton",
  "fullWidth",
  "width",
]);

const categoryStore = useCategoryStore();
const addressStore = useAddressStore();

const isSubmitting = ref(false);

// computed
const showButton = computed(() => props.showButton ?? true);
const fullWidth = computed(() => props.fullWidth ?? false);
const width = computed(() => props.width ?? "w-full");

const form = reactive({
  category: "",
  location: "",
});
const rules = {
  category: { required },
  location: { required },
};
const $v = useVuelidate(rules, form);

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
