var replace = require('frep');

var str = 'ABC'
var replacements = {
    'A': 'AAA',
    'B': 'BBB',
    'C': 'CCC',
    'D': 'DDD',
    'E': 'EEE',
    'F': 'FFF'
};


console.log(replace.strWithObj(str, replacements));