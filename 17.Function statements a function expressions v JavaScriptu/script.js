/*****************
*  Funkction
*/

// Function statements

// function calculateAge(bith) {
	// return 2021 - bith;	
// }
// console.log(calculateAge(2000));

//Function expressions

var calculateAge = function(bith){
	return 2021 - bith;
}
console.log(calculateAge(1981));

//Function expressions II

var myJob = function (job, firstName) {
	switch (job) {
		case 'učitel':
			return firstName + ' je ' + job;
		case 'manager/ka':
			return firstName + ' je ' + job; 	
		default:
			return 'Nevím co má ' + firstName + ' za práci.';
	}
}
console.log(myJob('učitel','David'));
console.log(myJob('manager/ka','Eva'));
console.log(myJob('zednik','Taras'));
