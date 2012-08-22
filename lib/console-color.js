/* 

Examples:

var colorized = require('console-color');

console.log(colorized.pass('pass'));
console.log(colorized.bright('process'));

*/

var colorized = function(color, str) {
	return '\033[9' + color + 'm' + str + '\033[0m';
};

var colors = {
	black: 0,
	red: 1,
	green: 2,
	yellow: 3,
	blue: 4,
	magenta: 5,
	cyan: 6,

	pass: 2,
	fail: 1,
	dull: 0,
	bright: 6
};

Object.keys(colors).forEach(function(i) {
	var color = colors[i];

	exports[i] = function(str) {
		return colorized(color, str);
	};
});

exports.ls = function() {
    console.log(Object.keys(colors).map(function(i) {
        var color = colors[i];
        return colorized(color, i);
    }).join('\n'));
};
