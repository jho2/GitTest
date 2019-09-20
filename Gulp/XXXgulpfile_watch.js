var gulp = require('gulp');
var watch = require('gulp-watch');
var print = require('gulp-print').default;

function print(cb) {
  print('kkk');
}

gulp.task('watch', function(){
  gulp.watch('css/*.css', print);

})