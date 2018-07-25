/* Konvertor temperature */

var kelvin = prompt('Unesite vrednost');

var celsius = kelvin - 273;

var farenhight = Math.floor(celsius * (9/5) + 32);

document.write('Temperatura je: ' + farenhight + ' stepeni farenhighta');

