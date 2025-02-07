import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: "/surechoice-store/",
  plugins: [react()]
  
=======
  plugins: [react()],
 base: "/"
>>>>>>> af32b2e7cc41752cb7ee6cf923e5db22c6bfa29c

})
