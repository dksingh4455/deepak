/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Make sure the paths match your directory structure, including pages, components, and app folders
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Adding the root path as well in case any dynamic classes are used
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Make sure these CSS variables are defined
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // Add any other plugins you're using, such as typography or forms if applicable
  ],
  // Enable JIT mode for better performance and smaller CSS file sizes
  mode: "jit",
};
