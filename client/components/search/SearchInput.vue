<template>
  <div class="w-full px-10">
    <div class="bg-white px-5 py-3 rounded-full text-black grid grid-cols-2">
      <a-select
          show-search
          placeholder="Seleccionar categoria"
        v-model:value="category"
        @change="handleChange"
      >
        <a-select-opt-group>
          <template #label>
            <span>
              Categorias destacadas
            </span>
          </template>
          <a-select-option value="jack">Jack</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
        </a-select-opt-group>
        <a-select-opt-group label="Engineer">
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
          <a-select-option value="Yiminghe1">yiminghe1</a-select-option>
        </a-select-opt-group>
      </a-select>
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

<script  setup>
const category = ref("")

const emit = defineEmits(["search"]);

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const handleSearch = () => {
};

const handleClick = () => {
  emit("search");
};
</script>
