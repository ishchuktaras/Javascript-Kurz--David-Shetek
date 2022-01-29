// Event - zpráva, která se posílá kódu, že se na webu něco stalo. Např. bylo na něco kliknuti, scrollovalo se, změněna velikost okna, kliknuto na určitou klávesu atd.
// Event listener - funkce, která čeká na určitý event a pak něco udělá

function welcome (){
	console.log("Vítejte u nás");
}


// Callback function

document.querySelector("h1").addEventListener("click",welcome); 

// Anonymní funkce

document.querySelector("h1").addEventListener("click",function(){
	console.log("Vítejte u nás");
}); 