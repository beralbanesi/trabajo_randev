module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'xsm': [ { 'min': '200px', 'max': '500px' }, ],
      'sm': [ { 'min': '501px', 'max': '750px' }, ],
      'tab': [ { 'min': '751px', 'max': '950px' }, ],
      'md': [ { 'min': '951px', 'max': '1150px' }, ],
      'lg': [ { 'min': '1151px' } ]
    },
    fontFamily: {
      'roboto': [ '"Roboto", sans-serif' ],
      'robotoblack': [ 'Roboto Black' ],
      'kdam': [ 'Kdam Thmor Pro' ],
      'inter': [ 'Inter' ],
      'oswald': [ '"Oswald", sans-serif' ],
    },
    extend: {
      colors: {
        azul: '#28447E',
        rosa: '#CC30E1',
        celeste: '#76BEFF',
        celeste2: '#a4dff1'
      },
      backgroundImage: {
        radial: 'radial-gradient(#28447E, black)',
        azulgradientl: 'linear-gradient(270deg, rgba(118, 190, 255, 0) 0%, rgba(40, 68, 126, 1) 100%)',
        azulgradientr: 'linear-gradient(90deg, rgba(118, 190, 255, 0) 0%, rgba(40, 68, 126, 1) 100%)',
        celestegradientl: 'linear-gradient(270deg, rgba(118,190,255,0) 0%, rgba(118,190,255,1) 100%);',
        celestegradientr: 'linear-gradient(90deg, rgba(118,190,255,0) 0%, rgba(118,190,255,1) 100%);',
        rosagradientl: 'linear-gradient(270deg, rgba(118,190,255,0) 0%, rgba(204,48,225,1) 100%);',
        rosagradientr: 'linear-gradient(90deg, rgba(118,190,255,0) 0%, rgba(204,48,225,1) 100%);',
        blacktransparent: 'linear-gradient(45deg, rgba(0,0,0,0.5) 25%, transparent 50%)',
        blacktransparentr: 'linear-gradient(90deg, rgba(0,0,0,0.5) 25%, transparent 95%)',
        blacktransparentu: 'linear-gradient(0deg,rgba(0,0,0,1) 25%, rgba(0,0,0,0.5) 50%, transparent 100%)',
        blacktransparentd: 'linear-gradient(180deg,rgba(0,0,0,1) 25%, rgba(0,0,0,0.5) 50%, transparent 100%)',
      },
      dropShadow: {
        plus: '0 2px 3px rgba(0, 0, 0, 0.45)',
        randev: '-2px 4px 2px rgba(0,0,0,60%)',
        title: '0px 2px 3px #0000003d',
        logoLight: '0 0 1px #00000091',
        celeste2: '0 0px 3px #a4dff1',
        racks: '0px 8px 3px black'
      },
      animation: {
        spinLogo: 'spin 2.2s linear infinite',
        lightCeleste: 'lightCeleste 10s cubic-bezier(0.16, 0.14, 0.82, 0.73) infinite',
        lightRosa: 'lightRosa 10s cubic-bezier(0.16, 0.14, 0.82, 0.73) infinite',
        logoHomeRan: 'logoHomeRan 7s cubic-bezier(0.16, 0.14, 0.82, 0.73) 1 forwards',
        logoHomeDev: 'logoHomeDev 7s cubic-bezier(0.16, 0.14, 0.82, 0.73) 1 forwards',
        rdev: 'rdev 10s cubic-bezier(0.16, 0.14, 0.82, 0.73) infinite',
        scale: 'scale .5s ease-out 1 forwards',
        disappear: 'disappear 10s ease-in fowards',
        logosDark: 'logosDark 10s cubic-bezier(0.16, 0.14, 0.82, 0.73) infinite alternate',
      },
      keyframes: {
        lightCeleste: {
          '0%, 100%': { filter: 'drop-shadow(0px 0px 3px #a4dff1)' },
          '30%': { filter: 'drop-shadow(0px 0px 4px #a4dff1)' },
          '70%': { filter: 'drop-shadow(0px 0px 2px #a4dff1)' },
        },
        lightRosa: {
          '0%, 100%': { filter: 'drop-shadow(0px 0px 3px #CC30E1)' },
          '30%': { filter: 'drop-shadow(0px 0px 4px #CC30E1)' },
          '70%': { filter: 'drop-shadow(0px 0px 2px #CC30E1)' },
        },
        logoHomeRan: {
          '0%': { color: '#a4dff1', filter: 'drop-shadow(0px 0px 5px #a4dff1)' },
          '100%': { color: '#28447E', filter: 'drop-shadow(0px 0px 0px #28447E)' }
        },
        logoHomeDev: {
          '0%': { color: '#CC30E1', filter: 'drop-shadow(0px 0px 5px #CC30E1)' },
          '100%': { color: '#CC30E1', filter: 'drop-shadow(0px 0px 0px #CC30E1)' }
        },
        rdev: {
          '0%, 100%': { filter: 'drop-shadow(0px 0px 0px #a4dff1)' },
          '30%': { filter: 'drop-shadow(0px 0px 2px #a4dff1)' },
          '70%': { filter: 'drop-shadow(0px 0px 1px #a4dff1)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' }
        },
        disappear: {
          'from': { opacity: 0 },
          'to': { opacity: 1 },
        },
        logosDark: {
          '0%': { filter: 'drop-shadow(0 0px 15px #a4dff100)' },
          '5%': { filter: 'drop-shadow(0 0px 15px #a4dff1)' },
          '100%': { filter: 'drop-shadow(0 0px 30px #a4dff1)' },
        }
      }
    },
  },
  plugins: [],
}
