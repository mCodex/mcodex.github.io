const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  mozjpeg: {
    quality: 80,
  },
  pngquant: {
    speed: 3,
    strip: true,
    verbose: true,
  },
});
