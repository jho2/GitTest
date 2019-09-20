const gulp = require("gulp");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const zip = require("gulp-zip");

function javaScript() {
    return gulp
        .src("../assets/js/*.js")
        .pipe(concat("controlAddIn.js"))
 //       .pipe(babel({ presets: ["@babel/env"] }))
        .pipe(uglify())
        .pipe(gulp.dest("../resource/Script"));
}

function resourceZip() {
    return gulp
        .src("../resource/**")
        .pipe(zip("Resource.zip"))
        .pipe(gulp.dest("../build"));
}

module.exports.javaScript = javaScript;
module.exports.resourceZip = resourceZip;
module.exports.build = gulp.series(javaScript, resourceZip);
