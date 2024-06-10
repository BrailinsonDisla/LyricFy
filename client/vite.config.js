import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
/**
 * @explicit vite config file
 * @code ~$ vite --config my-config.js
 */
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace("/api", ""),
      },
    },
    open: true,
  },
  plugins: [react()],
});
