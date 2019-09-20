var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(concat('concat.css'))
        .pipe(gulp.dest('css/dist'));
});


