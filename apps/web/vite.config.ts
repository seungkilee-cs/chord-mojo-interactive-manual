import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@chord-manual/core": path.resolve(__dirname, "../../packages/core/src"),
      "@chord-manual/device-configs": path.resolve(
        __dirname,
        "../../packages/device-configs/src",
      ),
    },
  },
  base: "/",
});
