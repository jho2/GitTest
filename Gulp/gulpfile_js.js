var gulp = require('gulp');
const concat = require('gulp-concat'),
    noop = require('gulp-noop'),
//    deporder = require('gulp-deporder'),
//    terser = require('gulp-terser'),
//    stripdebug = devBuild ? null : require('gulp-strip-debug'),
    sourcemaps = devBuild ? require('gulp-sourcemaps') : null;



var devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development');

function js() {

    return gulp.src( '../js/*')
        .pipe(sourcemaps ? sourcemaps.init() : noop())
//        .pipe(deporder())
        .pipe(concat('main2.js'))
//        .pipe(stripdebug ? stripdebug() : noop())
//        .pipe(terser())
        .pipe(sourcemaps ? sourcemaps.write() : noop())
        .pipe(gulp.dest('../build/js/'));

}
exports.js = js;