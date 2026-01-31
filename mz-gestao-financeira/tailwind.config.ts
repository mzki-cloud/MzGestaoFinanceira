import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5A5F', // Cor principal inspirada no Airbnb (vermelho/rosa)
        secondary: '#00A699', // Cor secundária (verde-água)
        dark: '#222222', // Cor de texto/fundo escuro
        light: '#FFFFFF', // Cor de fundo claro
        gray: {
          50: '#F8F8F8',
          100: '#EEEEEE',
          200: '#DDDDDD',
          300: '#CCCCCC',
          400: '#BBBBBB',
          500: '#AAAAAA',
          600: '#888888',
          700: '#666666',
          800: '#444444',
          900: '#222222',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Exemplo de fonte
        display: ['Montserrat', 'sans-serif'], // Fonte para títulos
      },
      boxShadow: {
        'airbnb': '0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)', // Sombra sutil
      },
    },
  },
  plugins: [],
};

export default config;
