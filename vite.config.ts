import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3333,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Credentials": "true",
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: false,
        secure: false,
        rewrite: (path) => {
          console.log(path, path.replace(/^\/api/, ""));
          return path.replace(/^\/api/, "");
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

