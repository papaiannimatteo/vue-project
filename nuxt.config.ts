export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
  primevue: {
    components: {
      include: "*",
    },
    directives: {
      include: "*",
    },
  },
  css: [
    "primevue/resources/themes/aura-light-green/theme.css",
    "primeicons/primeicons.css",
  ],
});
