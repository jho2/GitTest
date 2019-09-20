var gulp = require('gulp');
var cssnano = require('gulp-cssnano');

gulp.task('default', function() {
  return gulp.src('css/*.css')
      .pipe(cssnano())
      .pipe(gulp.dest('dist'));
});