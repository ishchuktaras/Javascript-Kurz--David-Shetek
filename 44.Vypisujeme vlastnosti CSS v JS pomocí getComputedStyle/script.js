var cube = document.querySelector("#cube");

var style = getComputedStyle(cube);

document.body.addEventListener("keydown", function(event){

	var oldleft = parseInt(style.left);
	var oldtop = parseInt(style.top);

	if(event.key === "ArrowRight"){
		var newleft = oldleft + 5;
		cube.style.left = newleft + "px";
	} else if(event.key === "ArrowLeft"){
		var newleft = oldleft - 5;
		cube.style.left = newleft + "px";
	} else if(event.key === "ArrowUp"){
		var newtop = oldtop - 5;
		cube.style.top = newtop + "px";
	} else if(event.key === "ArrowDown"){
		var newtop = oldtop + 5;
		cube.style.top = newtop + "px";
	}
});