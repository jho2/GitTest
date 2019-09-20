const gulp = require("gulp");

module.exports.helloWorld = function (callback) {
    console.log("Hello, World!");
    callback();
};
module.exports.helloWorld.description = "Prints 'Hello, World!' in the console.";
