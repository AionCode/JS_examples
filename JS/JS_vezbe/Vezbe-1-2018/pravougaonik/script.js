var a = prompt('Unesite duzinu stranice a');
var b = prompt('Unesite duzinu stranice b');

var o = a * 2 + b * 2;

var p = a * b;

document.write('Povrsina pravougaonika stranica a = '+a+' i b = '+b+' iznosi '+p+', a obim '+o+'.');
//ili
document.write('<br>');
document.write(`Povrsina pravougaonika stranica a = ${a} i b = ${b} iznosi ${p}, a obim ${o} .`);