import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {

    host: "192.168.0.102",
    port: 2001

  }
  

})
