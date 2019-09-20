var gulp = require('gulp');
var print = require('gulp-print').default;


gulp.task('print', async () => {
  gulp.src(['js/[a|o|m]*.js', '!js/m*.js', 'css/[a|p]*.css'])
      .pipe(print())
});