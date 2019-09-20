const gulp = require("gulp");

module.exports = {
    helloWorld: function (callback) {
        console.log("Hello, World!");
        callback();
    }
}