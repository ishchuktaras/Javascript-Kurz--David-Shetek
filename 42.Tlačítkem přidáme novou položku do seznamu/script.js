var button = document.getElementsByClassName("btn");

button[0].addEventListener("click",function(){
	var myList = document.getElementById("list");
	console.log(myList);
	var newItem = document.createElement("li");
	console.log(newItem);
});