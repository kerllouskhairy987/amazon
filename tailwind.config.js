// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./*.html", "./js/**/*.js"],
//   theme: {
//     extend: {
//       fontFamily: {
//         fontBody: ["Space Grotesk", "sans-serif"],
//       },
//       // Bar Animation
//       keyframes: {
//         wiggle: {
//           '100%': { transform: 'scale(1, 1)' },
//         },
//         animation: {
//           wiggle: 'wiggle 1s ease-in-out infinite',
//         },
//       },

//       // Container
//       container: {
//         center: true,
//         padding: "20px"
//       },

//     },
//     plugins: [],
//   }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        fontBody: ["Space Grotesk", "sans-serif"],
      },
      keyframes: {
        wiggle: {
          '100%': { transform: 'scale(1, 1) !important' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      container: {
        center: true,
        padding: "20px",
      },
    },
  },
  plugins: [],
};

