var gulp = require('gulp');

gulp.task('message3', function() {
    var e = new EventEmitter();
    e.on('msg', function(msg) { console.log(msg); });
    setTimeout(() => { e.emit('msg', 'HTTP Server Started'); e.emit('finish'); });
    return e;
});