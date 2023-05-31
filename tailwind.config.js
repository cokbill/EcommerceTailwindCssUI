/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./main.html',
  'mycart.html',
  'product.html',
  'personalinfo.html',
],
  theme: {
    extend: {
      colors : {
        'navcolor' : "#0C134F",
        'bgcolor' : "#1d267d",
        'hovercolor' : "#2f58cd",
        'grey' : "#d9d9d9",
        'buttonremove' : "#de6363",
        'star' : "#ffd95a",
    },
  },
},
  plugins: [],
}

