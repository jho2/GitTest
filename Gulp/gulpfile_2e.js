const gulp = require("gulp");
function helloWorld(callback) {
    console.log("Hello, World!");
    callback();
}
helloWorld.description = "Prints 'Hello, World!' in the console.";
gulp.task(helloWorld);