module.exports = {
  tailwindcss: {},
  autoprefixer: {},
  ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
};
