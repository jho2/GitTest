var gulp = require('gulp');
var of = require('rxjs').of;

gulp.task('message', function() {
    var o = of('HTTP sssServer Started');
    o.subscribe(function(msg) { console.log(msg); });
    return o;
});;