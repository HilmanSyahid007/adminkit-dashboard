/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // Kembali pakai nama biasa, bukan @tailwindcss/postcss
    autoprefixer: {},
  },
};

export default config;