const gulp = require('gulp');

function helloWorldPromise() {
    return new Promise(fulfill => {
        console.log("Hello, World!");
        fulfill();
    });
}

module.exports.helloWorldPromise = helloWorldPromise;