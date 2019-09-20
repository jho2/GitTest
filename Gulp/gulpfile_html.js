var gulp = require('gulp');
newer = require('gulp-newer');
noop = require('gulp-noop');
imagemin = require('gulp-imagemin');
htmlclean = require('gulp-htmlclean');

devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development');

    function images() {

        const out = '../build/images/';

        return gulp.src('../images/icons/*')

            .pipe(newer(out))
            .pipe(imagemin({ optimizationLevel: 5 }))
            .pipe(gulp.dest(out));

    };
exports.images = images;
    function html() {
        const out = '../build/html/';

        return gulp.src('../html/*')
            .pipe(newer(out)).pipe(devBuild ? noop() : htmlclean())
            .pipe(gulp.dest(out));
    }

exports.html = gulp.series(images, html);