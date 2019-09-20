var gulp = require('gulp');


function watch() {
  const watcher = gulp.watch('css/*.css');
  watcher.on('change', function(path, stats) {
    console.log(path);
  });
}

exports.default = gulp.series(watch)