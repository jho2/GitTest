const gulp = require('gulp');

const gap = require('gulp-append-prepend');

gulp.task('concat', async function(){
   gulp.src('app/index1.html')
       .pipe(gap.prependFile('app/header.html'))
       .pipe(gap.prependText('<!-- HEADER -->'))
       .pipe(gap.appendText('<!-- FOOTER -->'))
       .pipe(gap.appendFile('app/footer.html'))
       .pipe(gulp.dest('build'));
});