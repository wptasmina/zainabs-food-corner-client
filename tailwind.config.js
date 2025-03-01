/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: "class",
      backgroundImage: {
        bannerImg: "url('/chef-service.jpg')",
        featuredImg: "url('/featured.jpg')",
        blackOvrtlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0.8) 100%)"
      },
    },
  },
   plugins: [
    require('daisyui'),
  ],
}


