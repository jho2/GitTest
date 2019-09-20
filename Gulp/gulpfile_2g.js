const gulp = require("gulp");

exports.helloWorld = function (callback) {
    console.log("Hello, World!");
    callback();
};
exports.helloWorld.description = "Prints 'Hello, World!' in the console.";