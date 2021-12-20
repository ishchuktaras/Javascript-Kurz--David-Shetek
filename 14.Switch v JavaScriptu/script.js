/*
*     Switch
 */
var pet = 'fish';

switch (pet) {
	case 'cat':
		console.log('Máme kočku');
		break;
	case 'dog':
		console.log('Máme psa');
		break;
	case 'fish' :
		console.log('Máme rybičky');
		break;
	default:
		console.log('Máme jine zviřatko');

}

var ageTaras = 40;

// if (ageTaras >= 18) {
	// console.log('Taras je dospělý');
// } else if ('ageTaras <= 18 && ageTaras >= 8'){
	// console.log('Taras je mladiství');
// } else {
	// console.log('Taras je ditě');
// }

	switch (true){
		case ageTaras >= 18:
			console.log('Taras je dospělý');
			break;
		case ageTaras <= 18 && ageTaras >= 8:
			console.log('Taras je mladiství');
			break;
		default:
			console.log('Taras je ditě');
	}