var kelvin = prompt('Unesite temperaturu u kelvinima');

var celzijus = kelvin - 273;

var farenhajt = celzijus * (9/5) + 32;

farenhajt = Math.floor(farenhajt);

document.write('Temperatura je ' + farenhajt + ' stepeni farenhajta.');
//ili
document.write('<br>');
document.write(`Temperatura je ${farenhajt} stepeni farenhajta.`);