var gulp = require('gulp');
var jslint = require('gulp-jslint');

gulp.task('lint', function () {
    return gulp.src(['js/*.js'])
        .pipe(jslint({ /* this object represents the JSLint directives being passed down */}))
        .pipe(jslint.reporter('default'))
        .pipe(jslint.reporter('stylish'));

});
