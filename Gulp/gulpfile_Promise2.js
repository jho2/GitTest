const gulp = require('gulp');

function helloMercury() {
    return new Promise(fulfill => {
        console.log("Hello, Mercury!");
        fulfill();
    });
}

function helloVenus() {
    return new Promise(fulfill => {
        console.log("Hello, Venus!");
        fulfill();
    });
}

function helloWorld() {
    return new Promise(fulfill => {
        console.log("Hello, World!");
        fulfill();
    });
}

function helloSolarSystem() {
    console.log("Hello, solar system!");
    return helloMercury().then(helloVenus).then(helloWorld);
}

module.exports.helloMercury = helloMercury;
module.exports.helloVenus = helloVenus;
module.exports.helloWorld = helloWorld;
module.exports.helloSolarSystem = helloSolarSystem;
