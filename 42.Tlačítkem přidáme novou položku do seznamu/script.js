var button = document.getElementsByClassName("btn");

button[0].addEventListener("click",function(){
	var myList = document.getElementById("list");
	
	var newItem = document.createElement("li");
	
	newItem.textContent = "Jsem tu nový";

	myList.appendChild(newItem);
});