const gulp = require("gulp");

gulp.task("hello", function(callback) {
    console.log("Hello, World!");
    callback();
});