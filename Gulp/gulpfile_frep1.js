var gulp = require('gulp');
var frep = require('gulp-frep');

var patterns = [
    {
        pattern: /a/g,
        replacement: 'a'
    },
    {
        // Strip tags from HTML
        pattern: /(<([^>]+)>)/ig,
        replacement: ''
    },
    {
        // Normalize and condense newlines
        pattern: /(\r\n|\n){2,}/g,
        replacement: '\n'
    }
];

gulp.task('frep', async function () {
    gulp.src('../index.html')
        .pipe(frep(patterns))
        .pipe(gulp.dest('../build/html'))
});