var gulp = require('gulp');
var git = require('gulp-git');
var fs = require('fs');

// Run git init
// src is the root folder for git to initialize
gulp.task('1-init', async function () {
    git.init({cwd: 'C:\\JnWs\\Gulp\\my-project'}, function (err) {
        if (err) throw err;
    });
});

const wsDir = "c:/jnWs/";
gulp.task('00-clone', async function () {
    git.clone('https://github.com/AMPCo/ampco_com_au.git', {args: wsDir + 'Ampco'}, function (err) {
    });
});

gulp.task('00-rm', function () {
    return gulp.src(['**/*.js', '!**/gulpfile_Git.js'])
        .pipe(git.rm());
});

gulp.task('00-removeremote', async function () {
    git.removeRemote('origin', function (err) {
        if (err) throw err;
    });
});

gulp.task('00-addremote', async function () {
    git.addRemote('origin', 'https://github.com/jho2/GitTest.git', function (err) {
        if (err) throw err;
    });
});

gulp.task('0-status', async function () {
    git.status({args: '--porcelain'}, function (err, stdout) {
        if (err) throw err;
    });
});


const NL = "\n";
const wd = "c:/jnWs/Gulp/my-project/";
gulp.task('2-ignore', function (cb) {
    text = "node_modules/" + NL + ".idea/" + NL + "app/" + NL + "test/" + NL + "build/" + NL;
    fs.writeFile(wd + '.gitignore', text, cb);
});


gulp.task('3-add', async function () {
    return gulp.src(['**/*.js', '../assets/**/*'])
        .pipe(git.add());
});

gulp.task('commit', async function () {
    return gulp.src('**/*.js')
        .pipe(git.commit('second commit'));
});

gulp.task('tag', async function () {
    git.tag('v1.1.2', 'Version message v1.1.2', function (err) {
        if (err) throw err;
    });
    git.tag('v1.1.3', 'Version v1.1.3 message', function (err) {
        if (err) throw err;
    });
});

gulp.task('0-show_hash', async function () {
    return git.revParse({args: '--short HEAD'}, function (err, hash) {
        //if (err) ...
        console.log('current git hash: ' + hash);
    });
});

gulp.task('checkout', async function () {
    return gulp.src('**/*.js')
        .pipe(git.checkoutFiles());
});

gulp.task('XXcommit2', function () {
    let newVersion;

    function computeNewVersion() {
        newVersion = '1.2.3'
    }

    return gulp.src('**/*.js')
        .pipe(computeNewVersion())
        .pipe(git.commit(() => `Bumps to version 765.9.7`));
});

gulp.task('commit3', function () {
    return gulp.src('**/*.js')
        .pipe(git.commit('initial commit', {emitData: true}))
        .on('data', function (data) {
            console.log(data);
        });
});

gulp.task('0-getbranch', async function () {
    git.revParse({args: '--abbrev-ref HEAD'}, function (err, branch) {
        console.log('current git branch: ' + branch);
    });
});

// Create a git branch
gulp.task('branch', async function () {
    git.branch('MjaBranch2', function (err) {
        if (err) throw err;
    });
});

// Create and switch to a git branch
gulp.task('checkout_branch', async function () {

    git.checkout('MjaBranch3', {args: '-b'}, function (err) {
        if (err) throw err;
    });
});

gulp.task('XXlog', async function () {
    git.exec({args: 'log --follow index.js'}, function (err, stdout) {
        if (err) throw err;
    });
});


gulp.task('diff', async function () {
    gulp.src('**/*.js')
        .pipe(git.diff('7e486d55832f394f3a00a1eec9e608e057558dc0', {log: true}))
        .pipe(gulp.dest('./diff.out'));
});

gulp.task('4-commit', function () {
    return gulp.src(['**/*.js', '../assets/**/*'])
        .pipe(git.commit(['Fourth commit', 'additional message 1', 'additional message 2']));
});


gulp.task('5-push', async function () {
    git.push('origin', 'master', function (err) {
        if (err) throw err;
    });
});