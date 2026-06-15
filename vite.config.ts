import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

const isGitHubPagesDeploy = process.env.DEPLOY_TARGET === "gh-pages";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubPagesDeploy ? '/bhuppi25.github.io/' : '/',
})
