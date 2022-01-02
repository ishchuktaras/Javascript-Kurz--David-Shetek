// falsy = undefined, 0, '', "", Nun, null
// Truthy = to, co není falsy

// Undefined
var job;

if (job){
	console.log('Hodnota je true')
}else{
	console.log('Hodnota je false')
}

var salary = 0;

if (salary || salary == 0){
	console.log('Hodnota je true')
}else{
	console.log('Hodnota je false')
}