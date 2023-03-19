import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {

  if (command === 'build') {
    return {
      base: '/tailwindcomponents/',
      plugins: [vue()],
    } 
  } else {
    return {
      plugins: [vue()],
    }
  }
  
});
