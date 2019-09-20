var gulp = require('gulp');
var del = require('del');
var cache = require('gulp-cache');

gulp.task('clean:dist', async function() {
  return del.sync('dist');
})

gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
})

