var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
rename = require("gulp-rename");
notify = require("gulp-notify");

gulp.task('styles', async function() {
  return gulp.src('scss/*.scss')
      .pipe(  sass( { style: 'expanded' })      )
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest('build/css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(cssnano())
      .pipe(gulp.dest('build/css'))
      .pipe(notify({ message: 'Styles task complete' }));
});