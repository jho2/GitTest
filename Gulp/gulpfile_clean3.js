
const { series } = require('gulp');

function javascript(cb) {
  console.log("aa Server Started");
  cb();
}

function css(cb) {
  console.log("bb Server Started");
  cb();
}

exports.build = series(javascript, css);