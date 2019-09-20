var gulp = require('gulp');
var del = require('del');
var cache = require('gulp-cache');
var runSequence = require('gulp4-run-sequence');

gulp.task('dist', async function() {
  return del.sync('dist');
})

gulp.task('clear', async function (callback) {
  return cache.clearAll(callback)
})

gulp.task('build', function(callback) {
  runSequence('dist', 'clear', callback);
});
