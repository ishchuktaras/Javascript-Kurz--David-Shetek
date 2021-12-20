/*****************
*  Funkction
*/

/* DRY - Do not repeat yorself */

/* Výpočítáme věk pomocí console.log */

function calculateAge1 (birth) {
	console.log(2020 - birth);
}
calculateAge1 (2000);
calculateAge1 (1990);
calculateAge1 (1980);

/* Výpočítáme věk pomocí return */

function calculateAge1 (birth) {
	return 2020 - birth;
}

var ageDavid = calculateAge1 (2000);
var ageDiana = calculateAge1 (1990);
var ageMark = calculateAge1 (1980);

console.log(ageDavid, ageDiana, ageMark);