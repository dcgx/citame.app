<template>
  <header class="bg-white text-black py-2 px-5 fixed left-0 right-0 top-0">
    <div class="sticky flex items-center justify-between text-lg">
      <di class="font-bold text-3xl">citame</di>
      <SearchInput @search="handleSearch" style="width: 650px" />
      <div>Logo</div>
    </div>
  </header>

  <div>
    {{ $route.params.slug }}
  </div>
</template>
