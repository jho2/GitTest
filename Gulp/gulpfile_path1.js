var gulp = require('gulp');
var sort = require('gulp-sort');
debug = require('gulp-debug');

var streamFiles = require('stream-files');

gulp.task('stream-files', async function() {
    gulp.src(['../css/*', '../js/*'])
        .pipe(sort({ asc: true }))
        .pipe(debug())
        .pipe(streamFiles())

});