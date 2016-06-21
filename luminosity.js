// 

var r = Number(process.argv[2])
var g = Number(process.argv[3])
var b = Number(process.argv[4])
var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;
console.log(luminosity);

