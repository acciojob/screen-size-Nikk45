//your JS code here. If required.
function size(){
	document.getElementById("width").innerHTML = window.innerWidth;
	document.getElementById("height").innerHTML = window.innerHeight;
}

window.addEventListener('load',size);
window.addEventListener('resize',size);