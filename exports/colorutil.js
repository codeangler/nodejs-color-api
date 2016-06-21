// var r = Number(process.argv[2])
// var g = Number(process.argv[3])
// var b = Number(process.argv[4])

function islight(r, g, b){
  return 0.2126*Number(r) + 0.7152*Number(g) + 0.0722*Number(b);
}


module.exports = {
  islight : islight
 };