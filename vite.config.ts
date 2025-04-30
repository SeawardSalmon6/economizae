import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
      "~apis": resolve(__dirname, "./src/apis/"),
      "~components": resolve(__dirname, "./src/components/"),
      "~contexts": resolve(__dirname, "./src/contexts/"),
      "~hooks": resolve(__dirname, "./src/hooks/"),
      "~assets": resolve(__dirname, "./src/assets/"),
      "~icons": resolve(__dirname, "./src/icons/"),
      "~pages": resolve(__dirname, "./src/pages/"),
      "~services": resolve(__dirname, "./src/services/"),
      "~utils": resolve(__dirname, "./src/utils/"),
      "~types": resolve(__dirname, "./src/types/"),
      "~public": resolve(__dirname, "./public/"),
    },
  },
});
