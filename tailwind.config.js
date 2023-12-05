module.exports = {
  content: [
    "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
       colors: {
        'orange': '#ff4c3b',
        // 'gray':'#a1a1aa'
        // 'green': '#006400',
  
      },
      fontFamily:{
        'nunito':'Nunito Sans'
      },
    },
  },
  plugins: [],
}