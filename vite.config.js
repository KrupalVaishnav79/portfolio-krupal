import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "krupal-vaishnav-portfolio";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGitHubPages ? `/${repoName}/` : "/",
  plugins: [react()],
  server: {
    host: "127.0.0.1"
  }
});
