import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        experience: resolve(root, "experience.html"),
        ryvora: resolve(root, "ryvora.html"),
        carebridge: resolve(root, "carebridge.html"),
        skills: resolve(root, "skills.html"),
        resume: resolve(root, "resume.html"),
        contact: resolve(root, "contact.html")
      }
    }
  }
});
