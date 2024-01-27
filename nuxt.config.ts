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
    "primevue/resources/themes/bootstrap4-dark-blue/theme.css",
    "primeicons/primeicons.css",
  ],
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
  ],
});
