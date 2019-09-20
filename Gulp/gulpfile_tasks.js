var gulp = require('gulp');
var sass = require('gulp-sass');


function hello(cb) {
    console.log('hello');
    cb();
}

exports.hello = hello;

function sassCompile(cb) {
    return gulp.src('../assets/scss/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('../app/css'));
    cb();
}

exports.sass = sassCompile;

function watch() {
    gulp.watch('../assets/scss/*.scss', sassCompile);
}


exports.watch = watch;
