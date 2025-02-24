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
        bannerImg2: "url('/slide-2.webp')",
        blackOvrtlay: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(12, 40, 87) 100%)"
      },
    },
  },
   plugins: [
    require('daisyui'),
  ],
}


