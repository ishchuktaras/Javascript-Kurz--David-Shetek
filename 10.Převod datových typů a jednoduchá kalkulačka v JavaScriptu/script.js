var firstNumber = Number(prompt("Zadej první čislo:"));
var secondNamber = Number(prompt("Zadej druhé čislo:"));
var sign = prompt("Zadej plus nebo minus");

console.log(typeof(firstNumber));
console.log(typeof(secondNamber));

if (sign == "+") {
	console.log(firstNumber + secondNamber);
} else if (sign == "-") {
	console.log(firstNumber - secondNamber);
} else {
	console.log("Tutu matematickou operace nezmám.");
}

	console.log(typeof(Number("20"))); // Převod textu na čislo
	console.log(typeof(String(20))); // Převod čisla na text