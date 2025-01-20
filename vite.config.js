import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/React_Project_EW/", // Ensure this matches your repository name
  plugins: [react()],
});
