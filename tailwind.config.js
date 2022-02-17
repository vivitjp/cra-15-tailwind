module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        //'16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'mylist': '100px 200px minmax(300px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}
