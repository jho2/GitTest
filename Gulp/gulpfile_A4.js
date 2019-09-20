const { exec } = require('child_process');

function childProcessTask(cb) {
    exec("notepad");
    exec("SnippingTool");
    cb();
}

exports.default = childProcessTask;