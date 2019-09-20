var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('scss', function(){
  return gulp.src('scss/*.scss')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('build'))
});