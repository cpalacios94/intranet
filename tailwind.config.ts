import { heroui } from '@heroui/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/spinner.js',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ucsg: {
          primary: '#B31549',
          secondary: '#c2185b',
          dark: '#1a1a1a'
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      }
    }
  },
  darkMode: 'class',
  plugins: [heroui()] // <--- IMPORTANTE
}
export default config
