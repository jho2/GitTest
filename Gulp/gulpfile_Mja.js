var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('mja', function () {
    browserSync.init({
         proxy: "mja"
    });
});


