/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    // 'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    // 'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    // 'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      dropShadow:{
        "profile":"0 0 .5rem #dbdbdb"
      },
      keyframes: {
        wiggle: {
          '0%': {opacity:"20%" },
          '100%': { opacity:"90%" },
        },
        navbar: {
          '0%': {top:"0px" },
          '100%': { top:"-5rem" },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        navbar:"navbar .5s ease-in",
        rev_navbar:"navbar .5s ease-in reverse",
      }
    },
  },
  plugins: [],
}
