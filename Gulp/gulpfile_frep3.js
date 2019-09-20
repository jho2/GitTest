var replace = require('frep');

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var patterns = [
    {
        pattern: /[ABC]/g,
        replacement: '#@!'
    },
    {
        pattern: /[XYZ]/g,
        replacement: '$()'
    },

];


console.log(replace.strWithArr(str, patterns));