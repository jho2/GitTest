const gulp = require("gulp");

gulp.task("hello", callback => {
    console.log("Hello, World!");
    callback();
});