module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen : {
      xs: {min: '390px'},
      sm: {min: '640px'},
      md: {min: '768px'},
      lg: {min: '1024px'},
      xl: {min: '1440px'},
    },
    spacing: {
      0: '0px',
      10: '10px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px',
      48: '48px',
      64: '64px',
      100: '100px',
      'screen' : '100%',
    },
    height : {
      'screen' : '100%',
    },
    fontSize : {
      m: '20px',
      l: '24px',
      xl: '32px',
      xxl: '48px',
    },
    borderRadius: {
      s : '10px',
      l : '16px',
      full : '50%',
    },
    extend: {
      colors: {
        darkRed : '#871A02',
        gold : '#ac9367',
      },
      rotate: {
        20 : '20deg',
      },
    },
  },
  plugins: [],
}
