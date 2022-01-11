/* **************
* Objects (Objekty)
*/

// Pole = hodnotám jsou přiřazené indexů; záleží na pořadi

var employees =['David', 'Jana', 'Diana'];

// Objekt = hodnotám jsou přirazené jiné hodnoty; nezáleží na pořadi

var taras = {
	firstName: 'Taras',
	secondName: 'Ishchuk',
	birthYear: '1981',
	driveLicence: true,
	family: ['Matvii', 'Eva', 'Sofia', 'Angelina', 'Marta']
}

console.log(taras);
console.log(taras.secondName);
console.log(taras['secondName']);

// Druhá možnost, jak zapsat objekt

var marta = new Object();
marta.firstName = 'Marta';
marta.secondName = 'Vavzyniak';
marta.birthYear = '1991';
marta.driveLicence = 'false';

console.log(marta);
