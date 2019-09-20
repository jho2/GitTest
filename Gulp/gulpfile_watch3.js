var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
rename = require("gulp-rename");
notify = require("gulp-notify");
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
rename = require("gulp-rename");
notify = require("gulp-notify");
jshint = require("gulp-jshint");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
rename = require("gulp-rename");
notify = require("gulp-notify");

gulp.task('images', function() {
  return gulp.src('images/icons/*')
      .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
      .pipe(gulp.dest('dist/assets/images'))
      .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('css', async function() {
  return gulp.src('scss/*.scss')
      .pipe(  sass( { style: 'expanded' })      )
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest('build/css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(cssnano())
      .pipe(gulp.dest('build/css'))
      .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', async function () {
  return gulp.src('js/**/*.js')
  //        .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('default'))
      .pipe(concat('main2.js'))
      .pipe(gulp.dest('dist/assets/js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('dist/assets/js'))
      .pipe(notify({message: 'Scripts task complete'}));
});

gulp.task('watch', function() {

  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);



});

gulp.task('default', gulp.series('css', 'images', (done) => {

  // image changes
  gulp.watch('images/icons/*', gulp.series('images'));

  // CSS changes
  gulp.watch("scss/*.scss", gulp.series('css'));

  done();

}));

