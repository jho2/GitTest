const
    gulp = require('gulp'),
    del = require('del'),
    dir = {
      src         : 'src/',
      build       : 'build/'
    };

gulp.task('clean', () => {

    return del([ dir.build ]);

});
