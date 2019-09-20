var gulp = require('gulp');
rename = require("gulp-rename");
svgmin = require("gulp-svgmin");
svgstore = require("gulp-svgstore");

gulp.task('images:iconsvg', function() {
   return gulp.src(['images/iconsvg/*.svg'])
       .pipe(rename({ prefix: 'icon-' }))
       .pipe(svgmin())
 //      .pipe(svgstore({ inlineSvg: true }))
       .pipe(gulp.dest('dist/images'));
});