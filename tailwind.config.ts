import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f6ff',
          100: '#d9e9ff',
          200: '#b0d1ff',
          300: '#7db1ff',
          400: '#4f91ff',
          500: '#246df5',
          600: '#1754d1',
          700: '#1140a7',
          800: '#0f3584',
          900: '#0f2c66'
        },
        accent: {
          500: '#2ecc71',
          600: '#27ae60'
        },
        slate: {
          950: '#0b1220'
        }
      },
      boxShadow: {
        glow: '0 18px 50px -15px rgba(36, 109, 245, 0.45)'
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(18,57,119,0.92), rgba(19,140,231,0.85))'
      }
    }
  },
  plugins: []
};

export default config;
