var n = 10;
var a = 0;
var b = 1;

console.log(a);
console.log(b);

for (var i = 2; i < n; i++) {
  var c = a + b; 
  console.log(c); 
  a = b; 
  b = c;
}