import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This configuration sets the base path for the deployed app.
// It should match your repository name on GitHub.
export default defineConfig({
  plugins: [react()],
  base: "/smartplus/",
})
