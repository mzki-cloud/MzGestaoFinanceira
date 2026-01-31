// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // Para o diretório `app` (Next.js 13+)
        "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Para o diretório `pages` (Next.js tradicional)
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // Caso você tenha uma pasta `src`
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Adicione suas cores personalizadas aqui, se houver
      colors: {
        primary: '#FF5A5F', // Exemplo de cor primária (Airbnb-like)
        secondary: '#00A699', // Exemplo de cor secundária
        'gray-light': '#F7F7F7',
        'gray-medium': '#DDDDDD',
        'gray-dark': '#484848',
        'mz-blue': '#007BFF', // Exemplo de cor para Mz Gestão Financeira
        'mz-green': '#28A745',
        'mz-red': '#DC3545',
      },
    },
  },
  plugins: [],
};
export default config;
