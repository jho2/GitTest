var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('hint', function () {
    return gulp.src(['js/*.js'])
        .pipe(jshint({ /* this object represents the JShint directives being passed down */}))
        .pipe(jshint.reporter("gulp-jshint-html-reporter", {
                filename: __dirname + "/jshint-output.html",
                createMissingFolders: false
            })
        );
});
