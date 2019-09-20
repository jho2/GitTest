(() => {
    'use strict';
    const
        devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),
        dir = {
            src: '../',
            build: '../build/'
        },
        gulp = require('gulp'),
        noop = require('gulp-noop'),
        newer = require('gulp-newer'),
        size = require('gulp-size'),
        imagemin = require('gulp-imagemin'),
        sass = require('gulp-sass'),
        postcss = require('gulp-postcss'),
        sourcemaps = devBuild ? require('gulp-sourcemaps') : null,
        browsersync = devBuild ? require('browser-sync').create() : null;

    console.log(process.env.NODE_ENV || 'development');
    console.log('Gulp', devBuild ? 'development' : 'production', 'build');

    const imgConfig = {
        src: dir.src + 'images/icons/*',
        build: dir.build + 'images/',
        minOpts: {
            optimizationLevel: 5
        }
    };

    function images() {
        return gulp.src(imgConfig.src)
            .pipe(newer(imgConfig.build))
            .pipe(imagemin(imgConfig.minOpts))
            .pipe(size({showFiles: true}))
            .pipe(gulp.dest(imgConfig.build));
    }

    exports.images = images;

    const cssConfig = {
        src: dir.src + 'scss/main.scss',
        watch: dir.src + 'scss/**/*',
        build: dir.build + 'css/',
        sassOpts: {
            sourceMap: devBuild,
            imagePath: '/images/',
            precision: 3,
            errLogToConsole: true
        },

        postCSS: [
            require('usedcss')({
                html: ['index1.html']
            }),
            require('postcss-assets')({
                loadPaths: ['images/'],
                basePath: dir.build
            }),
            require('autoprefixer')({
                browsers: ['> 1%']
            }),
            require('cssnano')
        ]

    };

    function css() {

        return gulp.src(cssConfig.src)
            .pipe(sourcemaps ? sourcemaps.init() : noop())
            .pipe(sass(cssConfig.sassOpts).on('error', sass.logError))
            .pipe(postcss(cssConfig.postCSS))
            .pipe(sourcemaps ? sourcemaps.write() : noop())
            .pipe(size({showFiles: true}))
            .pipe(gulp.dest(cssConfig.build))
            .pipe(browsersync ? browsersync.reload({stream: true}) : noop());

    }

    exports.css = gulp.series(images, css);

    const syncConfig = {
        server: {
            baseDir: '../',
            index: 'index1.html'
        },
        port: 8000,
        open: false
    };


    function server(done) {
        if (browsersync) browsersync.init(syncConfig);
        done();
    }

    function watch(done) {

        // image changes
        gulp.watch(imgConfig.src, images);

        // CSS changes
        gulp.watch(cssConfig.watch, css);

        done();

    }

    /**************** default task ****************/
    exports.default = gulp.series(exports.css, watch, server);


})();

