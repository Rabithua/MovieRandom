/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    animation: {
      'float': 'float 3s ease-out infinite',
      'show': 'show 1s forwards ease-in-out',
      'rotate': 'rotate 5s linear infinite',
      'homeFloat': 'homeFloat 10s ease-in-out infinite'
    },
    keyframes: {
      float: {
        '0%': {
          transform: 'translateY(0px)'
        },
        '5%': {
          transform: 'translateY(-2px) scale(1.2)'
        },
        '25%': {
          transform: 'translateY(-10px) scale(1.2)'
        },
        '75%': {
          transform: 'translateY(10px) scale(1.2)'
        },
        '100%': {
          transform: 'translateY(0px) scale(1.2)'
        }
      },
      homeFloat: {
        '0%': {
          transform: 'translateY(0px)'
        },
        '25%': {
          transform: 'translateY(-100px) scale(1.3)'
        },
        '50%': {
          transform: 'translateY(-200px) scale(1.5)'
        },
        '75%': {
          transform: 'translateY(-100px) scale(1.3)'
        },
        '100%': {
          transform: 'translateY(0px) scale(1)'
        }
      },
      rotate: {
        '0%': {
          transform: 'rotate(0)'
        },
        '100%': {
          transform: 'rotate(1turn)'
        }
      },
      show: {
        '0%': {
          opacity: '0',
          transform: 'translateY(10px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0px)'
        }
      }
    },
    extend: {},
  },
  plugins: [
  ]
}
