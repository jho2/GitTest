function promiseTask() {
    return Promise.resolve('the value is ignored');
}

exports.default = promiseTask;