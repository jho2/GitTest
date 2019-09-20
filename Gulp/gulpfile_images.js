var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
rename = require("gulp-rename");
notify = require("gulp-notify");
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('images', function() {
  return gulp.src('images/icons/*')
      .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(gulp.dest('dist/assets/images'))
      .pipe(notify({ message: 'Images task complete' }));
});