import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { globSync } from 'glob'

export default defineConfig({
  plugins: [tailwindcss()],

  base: '/ben-jamal/',

  build: {
    rollupOptions: {
      input: Object.fromEntries(
        globSync('**/*.html', {
          ignore: ['node_modules/**', 'dist/**'],
        }).map(file => [
          file.slice(0, -5),
          resolve(__dirname, file),
        ])
      ),
    },
  },
})