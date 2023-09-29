// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@tailvue/nuxt',
    '@ant-design-vue/nuxt'
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/overrides/ant-design.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
