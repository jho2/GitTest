const gulp = require("gulp");

exports = {
    helloWorld: function (callback) {
        console.log("Hello, World!");
        callback();
    },
    helloMoon: function(callback) {
        console.log("Hello, Moon!");
        callback();
    }
};