var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('processCSS', async function() {
   gulp.src('css/*.css')
       .pipe(sourcemaps.init())
       .pipe(autoprefixer())
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('build'));
});
