const gulp = require('gulp');
const print = require('gulp-print');

gulp.task('message', function() {
  return gulp.src('package.json')
    .pipe(print.default(function() { return 'uuuHTTP Server Started'; }));
});