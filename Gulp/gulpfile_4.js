var gulp = require('gulp');
var print = require('gulp-print').default;


gulp.task('print', () => {
  return gulp.src('../package.json')
    .pipe(print())
});