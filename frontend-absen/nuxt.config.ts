export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      // ganti sesuai URL backend NestJS lu
      apiBase: "http://localhost:3000/api"
    }
  }
});
