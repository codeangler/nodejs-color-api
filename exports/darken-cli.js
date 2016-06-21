var colorutil = require('./colorutil.js');
var initialColor = [process.argv[2], process.argv[3], process.argv[4]];
var darkerColor = initialColor.map(function (number) {
  return number*.8;
})

console.log(darkerColor[0], darkerColor[1], darkerColor[2])