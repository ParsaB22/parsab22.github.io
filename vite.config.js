import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'public/projects.html'),
        about: resolve(__dirname, 'public/about.html'),
        vera: resolve(__dirname, 'public/projectInformation/vera.html'),
        greenmachine: resolve(__dirname, 'public/projectInformation/theGreenMachine.html'),
        cloud10: resolve(__dirname, 'public/projectInformation/cloud10.html'),
        portfolio: resolve(__dirname, 'public/projectInformation/portfoilioWebsite.html'),
        venomgains: resolve(__dirname, 'public/projectInformation/venomGains.html'),
      }
    }
  }
})