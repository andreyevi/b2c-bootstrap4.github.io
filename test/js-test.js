"use strict"

var toggled = false;
function toggle(){
	if(!toggled){
		toggled = true;
		document.getElementById("test").style.display = "none";
		return;
	}
	if(toggled){
	toggled = false;
	document.getElementById("test").style.display = "block";
	return;
}}