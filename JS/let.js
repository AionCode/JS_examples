
let korisnik = prompt('How old are you?');

if (korisnik < 18) {
	alert('Ne mozes proci picko!');
} else if (korisnik > 18) {
	alert('Mozes proci LJUBAVI');
} else if ( korisnik == 18) {
	alert('Koji mesec rodjenja ?');
} else {
	alert('To nije broj!');
}

let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);