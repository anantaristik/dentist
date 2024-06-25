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
        krem: {
          DEFAULT: '#FFF8E8',
          100: '#fffdf9',
          200: '#fffaf3',
          300: '#fff6ed',
          400: '#fff3e7',
          500: '#fff0e1',
          600: '#ffe0b3',
          700: '#ffd086',
          800: '#ffc059',
          900: '#ffb02d',
        },
        biru: {
          DEFAULT: '#276FD8',
          100: '#d4e1f9',
          200: '#a8c4f3',
          300: '#7ba6ec',
          400: '#4f89e6',
          500: '#236bdf',
          600: '#1c56b3',
          700: '#153e87',
          800: '#0d285c',
          900: '#06112e',
        },
        pink: {
          DEFAULT: '#F465BC',
          100: '#ffe0f2',
          200: '#ffc2e6',
          300: '#ffa3da',
          400: '#ff85cf',
          500: '#ff66c3',
          600: '#cc519c',
          700: '#994174',
          800: '#66314d',
          900: '#331826',
        },
        kuning: {
          DEFAULT: '#FFE500',
          100: '#fffde0',
          200: '#fffac2',
          300: '#fff8a3',
          400: '#fff685',
          500: '#fff466',
          600: '#ccc34e',
          700: '#999338',
          800: '#666223',
          900: '#33310d',
        },
        oranye: {
          DEFAULT: '#FF6936',
          100: '#ffded8',
          200: '#ffc1b2',
          300: '#ffa48c',
          400: '#ff8766',
          500: '#ff6a40',
          600: '#cc5633',
          700: '#993f26',
          800: '#662a19',
          900: '#33150c',
        },
      },

  },
  plugins: [],
};

export default config;
