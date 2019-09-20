const gulp = require('gulp');

function copyFiles() {
    return gulp
        .src("../assets/css/*.css")
        .pipe(gulp.dest("../dest1"))
        .pipe(gulp.dest("../dest2"));
}


module.exports.copyFiles = copyFiles;