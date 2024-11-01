/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navybg: "var(--navy)",
        blue: "var(--light-blue)",
        navy: "rgba(67, 69, 88, 0.6)",

        // tilføj egne farver
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Standard sans-serif skrifttype
        lato: ["Lato", "sans-serif"], // Tilføj Lato som font-lato
        cabin: ["Cabin", "sans-serif"], // Tilføj Cabin som font-cabin
      },
    },
  },
  plugins: [],
};
