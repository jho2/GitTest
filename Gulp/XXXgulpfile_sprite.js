var gulp = require('gulp');
var sprity = require('sprity');


gulp.task('sprites', function() {
   return sprity.src({
      src: 'images/icons/*.png}'
   }).pipe(gulp.dest('dist/images'))
});