/*****************
*  Funkction
*/

/* Výpočítáme věk */

function calculateAge (birth) {
	return 2021 - birth;
}

function yearsUntilRetirement(year, firstName){
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement >= 0) {
		console.log('Počet let do důchodu ' + retirement + ' let' + ' u ' + firstName);
	} else {
		retirement = -(retirement);
		console.log(firstName + ' je už v důchodu ' + retirement + ' let.')
	}
}


yearsUntilRetirement(1953, 'David');
yearsUntilRetirement(1990, 'Diana');
yearsUntilRetirement(1981, 'Taras');