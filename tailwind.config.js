/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sml': '890px',
        'lgs': '1270px',
        'lg': '1305px',
        'lgm': '1632px'
      },
      colors: {
        'primary-blue-1': '#1C4980',
        'primary-blue-2': '#0073E6',
        'primary-blue-5': '#3E6493',
        'primary-blue-9': '#E5F1FC',
        'primary-blue-8': '#F6F8FA',
        'primary-blue-10': '#F2F8FE',
        'primary-blackish-1': '#BACBD5',
        'primary-blackish-2': '#DADCE0',
        'primary-blackish-3': '#8DA4BF',
        'primary-purple-1': '#6548EE',
        'primary-accent-1': '#E9407A',
        'primary-accent-2': '#DDEDFF',
        'primary-royalBlue-1': '#3079E1',
        'primary-green-1': '#05C165',
        'primary-red-1': '#FBEBEA'


      }
    },
  },
  plugins: [],
}

