var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
rename = require("gulp-rename");
notify = require("gulp-notify");
jshint = require("gulp-jshint");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

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