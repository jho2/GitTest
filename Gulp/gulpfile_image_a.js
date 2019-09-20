var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('default', async function () {
    gulp.src('../assets/images/Largepng/*.png')
        .pipe(imageResize({
            width : 200,
            height : 200,
            crop : true,
            upscale : false
        }))
        .pipe(gulp.dest('app'));

});