var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function(){
  return gulp.src('images/**/*.+(png|jpg|gif|svg)')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
});