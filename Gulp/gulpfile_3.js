var gulp = require('gulp');
var print = require('gulp-print').default;

gulp.task('message', function() {
  return gulp.src('package.json')
    .pipe(print(function() { return 'HTTP Server Started'; }));
});