import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "./src/features"),
      "@base": path.resolve(__dirname, "./src/base"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@images": path.resolve(__dirname, "./img"),
    },
  },
});
