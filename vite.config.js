import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" — כך ה-build עובד גם ב-Netlify, גם ב-GitHub Pages וגם מקומית
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("src/data/chapters")) return "chapters";
          if (id.includes("node_modules")) return "vendor";
        }
      }
    }
  }
});
