var num = new Array(100);
var m = 0;
for (var j = 0; j < num.length; j++) {
    num[j] = Math.floor(Math.random() * 100);
}
for (var i = 0; i < num.length; i++) {
    m = m + num[i];
}
var total = m / num.length;
console.log(total);
