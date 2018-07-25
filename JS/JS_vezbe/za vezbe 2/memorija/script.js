var bit = prompt('Unesite kapacitet u bitovima');

var bajt = bit / 8;

var kb = bajt / 1024;

var mb = kb / 1024;

var gb = mb / 1024;

document.getElementById("bit").innerHTML = bit;
document.getElementById("bajt").innerHTML = bajt;
document.getElementById("kb").innerHTML = kb;
document.getElementById("mb").innerHTML = mb;
document.getElementById("gb").innerHTML = gb;
