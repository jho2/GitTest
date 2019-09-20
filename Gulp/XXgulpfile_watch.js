var gulp = require('gulp'),

gulp.task('watch', function () {
  gulp.watch('js/*.js', async function (event) {
    console.log('Event type: ' + event.type); // added, changed, or deleted
    console.log('Event path: ' + event.path); // The path of the modified file
  })
});

