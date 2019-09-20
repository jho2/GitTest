const gulp = require("gulp");

function helloWorld(callback) {
    console.log("Hello, World!");
    callback();
}

gulp.task(helloWorld);