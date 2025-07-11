/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'secondary-blue': 'var(--secondary-blue)',
        'accent-gold': 'var(--accent-gold)',
        'gray-light': 'var(--gray-light)',
        'gray-medium': 'var(--gray-medium)',
        'dark-gray': 'var(--dark-gray)',
      },
    },
  },
  plugins: [],
}