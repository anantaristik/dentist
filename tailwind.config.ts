import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '2rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

      colors: {
        black: '#000000',
        white: '#FFFFFF',
        krem: '#FFF8E8',
        biru: '#276FD8',
        pink: '#F465BC',
        kuning: '#FFE500',
        oranye: '#FF6936',
      },

  },
  plugins: [],
};

export default config;
