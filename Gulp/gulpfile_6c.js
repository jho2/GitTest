var gulp = require('gulp');
var print = require('gulp-print').default;

var spawn = require('child_process').spawn;

gulp.task('message5', function() {
    return spawn('notepad.exe', ['HTTP', 'Server', 'Started'], { stdio: 'inherit' });
});