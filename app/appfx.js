
function showRad() {
	var radDiv = document.getElementById("rad");
	var a = document.getElementById("abt");
	radDiv.style.display = radDiv.style.display === 'none' ? 'block' : 'none';
	a.style.display = a.style.display === 'block' ? 'none' : 'block';
}

function getForm(){
	var inputs = document.getElementsByTagName('input');
	var checked = [];
	for (var i = 0; i < inputs.length; i++){
		if(inputs[i].type == "checkbox"){
			if(inputs[i].checked){
				checked.push(inputs[i]);
			}
		}
	}
	return checked;
}

function hideMap() {
	var canvas = document.getElementById("gMap");
	var gen = document.getElementById("generate");
	var hide = document.getElementById("hide");
	gen.style.display = "block";
	hide.style.display = "none";
	canvas.style.display = "none";
}

function drawMap() {
	getForm();
	var canvas = document.getElementById("gMap");
	canvas.style.display = "block";
	var context = gMap.getContext("2d");
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;
	var hide = document.getElementById("hide");
	var gen = document.getElementById("generate");
	hide.style.display = "block";
	gen.style.display = "none";
	
	context.rect(0, 0, canvas.width, canvas.height);
	context.rect(10, 0, canvas.width, canvas.height*0.07);
	context.rect(10, 0, canvas.width*0.07, canvas.height);
	context.stroke();
	
	var rad = document.getElementById("rad");
	rad.style.display = "none";
	var a = document.getElementById("abt");
	a.style.display = "block";
}


	
