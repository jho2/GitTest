var gulp = require('gulp');
newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');

devBuild  = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),

function images() {

  const out = '../build/images/';

  return gulp.src('../images/icons/*')

      .pipe(newer(out))
      .pipe(imagemin({ optimizationLevel: 5 }))
      .pipe(gulp.dest(out));

};
exports.images = images;