var r = prompt('Unesite poluprecnik kruga');


var o = 2*r*3.14;

var p = r*r*3.14;

document.write('Povrsina kruga poluprecnika '+r+' iznosi '+p+', a obim '+o+'.');
//ili
document.write('<br>');
document.write(`Povrsina kruga poluprecnika ${r} iznosi ${p}, a obim ${o} .`);