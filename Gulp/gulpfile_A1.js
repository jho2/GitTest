const { src, dest } = require('gulp');

function streamTask() {
    return src('js/*.js')
        .pipe(dest('output'));
}

exports.default = streamTask;