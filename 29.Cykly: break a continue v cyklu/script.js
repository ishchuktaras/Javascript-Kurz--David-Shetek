/* **************
 * Do while cyklus
 */

/*
break - způsobí ukončení cyklus
continue - zastaví průchod cyklem, ale cyklus pokračuje dál (např. zastaví první průchod
cyklem, ale pokračuje druhým opakováním)

*/

var wanted = ['Killer', 'Bloody', 'Hacker'];
var treveler = prompt();
 for (var i = 0; i < 3; i++){
	 console.log(i);
	if (wanted[i] === treveler){
		console.log('Zadržte ho!');
		continue;
	}
	console.log("Toto se neprovede poté, co se narazí na continue");
 }