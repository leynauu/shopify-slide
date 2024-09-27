module.exports = {
  content: [
    './**/*.html',
    './**/*.liquid',
    './**/*.js',
    './**/*.vue',
    '!./node_modules/**',
  ],
  theme: {
    extend: {
      margin: {
        '5': '2rem',
        '10': '5rem',
      },
      padding: {
        '15': '15rem',
      },
      maxWidth: {
        'sm': '18rem',
      },
      fontFamily: {
        custom: ['"ITC Avant Garde Gothic Pro"', 'sans-serif'],
        body: ['Avenir', 'sans-serif'],
      },
      fontSize: {
        'custom-size': '31px',
        'button-size': '12px',
        'title-size': '20px',
      },
      lineHeight: {
        'custom-line-height': '40px',
        'button-line-height': '17.48px',
        'title-line-height': '26px',
        body: '25.6px',
      },
      fontWeight: {
        'custom-weight': 700,
        'button-weight': 900,
      },
      colors: {
        'custom-blue': '#99C3CC',
        'custom-red': '#CC9999',
        'custom-purple': '#CB99CC',
        'custom-green': '#BCD9B2',
      },
      container: {
        screens: {
          lg: "1920px",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
