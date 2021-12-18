var firstNumber = Number(prompt("Zadej první čislo:"));
var secondNamber = Number(prompt("Zadej druhé čislo:"));
var sign = prompt("Zadej znak pro matematickou operaci");

if (sign == "+") {
	console.log(firstNumber + secondNamber);
} else if (sign == "-") {
		console.log(firstNumber - secondNamber);
}	else if (sign == "*") {
		console.log(firstNumber * secondNamber);
}	else if (sign == "/" && secondNamber != 0) {
		console.log(firstNumber / secondNamber);
} else if (sign == "/" && secondNamber == 0) {
	console.log("Nesmíš dělít nulou. Druhé číslo nesmí být nula pří dělení");
} else {
	console.log("Nedokáží takovouto operací provést.");
}



