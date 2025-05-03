import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Asigură-te că include toate fișierele relevante
  ],
  extend: {
    boxShadow: {
      'yellow-glow': '0 0 10px 2px #EDE618',
    },
    keyframes: {
      glow: {
        '0%, 100%': { boxShadow: '0 0 10px 2px #EDE618' },
        '50%': { boxShadow: '0 0 20px 4px #EDE618' },
      },
    },
    animation: {
      'glow-pulse': 'glow 1.5s ease-in-out infinite',
    },
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
