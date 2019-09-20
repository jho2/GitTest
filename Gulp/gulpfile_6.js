var gulp = require('gulp');
var print = require('gulp-print').default;


gulp.task('message', function () {
    return new Promise(function (resolve, reject) {
        console.log("HTTP Server Started");
        resolve();
    });
});