var cube = document.querySelector("#cube");

var style = getComputedStyle(cube);

document.body.addEventListener("keydown", function(event){
	if(event.key === "ArrowRight"){
		var oldleft = parseInt(style.left);
		var newleft = oldleft + 5;
		cube.style.left = newleft + "px";
	} else if(event.key === "ArrowLeft"){
		var oldleft = parseInt(style.left);
		var newleft = oldleft - 5;
		cube.style.left = newleft + "px";
	} else if(event.key === "ArrowUp"){
		var oldtop = parseInt(style.top);
		var newtop = oldtop - 5;
		cube.style.top = newtop + "px";
	} else if(event.key === "ArrowDown"){
		var oldtop = parseInt(style.top);
		var newtop = oldtop + 5;
		cube.style.top = newtop + "px";
	}
});