// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {}, // ✅ 반드시 가장 위!
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true
      }
    },
    'autoprefixer': {}
  }
}
