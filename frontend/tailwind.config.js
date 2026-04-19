/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1A365D',
        'light-blue': '#3182CE',
        'soft-cyan': '#EBF8FF',
        'absolute-white': '#FFFFFF',
        'ice-grey': '#A0AEC0',
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%" },
          to: { backgroundPosition: "350% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;