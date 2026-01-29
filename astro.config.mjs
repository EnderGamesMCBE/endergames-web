import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://endergames.org",
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@": "/src"
      }
    }
  }
});
