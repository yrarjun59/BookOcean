import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { createProxy } from "http-proxy-middleware";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
