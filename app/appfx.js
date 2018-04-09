
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
	var x = canvas.width;
	var y = canvas.height;
	var hide = document.getElementById("hide");
	var gen = document.getElementById("generate");
	hide.style.display = "block";
	gen.style.display = "none";
	
	context.rect(0, 0, x, y);
	
	//top and leftmost
	context.rect(x*0.08, 0, x, y*0.05);
	context.rect(0, y*0.04, x*0.05, y);
	
	//1 - 6
	context.rect(x*0.08, y*0.3, x*0.06, y*0.13);
	context.rect(x*0.16, y*0.3, x*0.06, y*0.13);
	context.rect(x*0.08, y*0.5, x*0.06, y*0.13);
	context.rect(x*0.16, y*0.5, x*0.06, y*0.13);
	context.rect(x*0.08, y*0.7, x*0.06, y*0.13);
	context.rect(x*0.16, y*0.7, x*0.06, y*0.13);
	
	//top aisles
	context.rect(x*0.25, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.308, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.364, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.422, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.480, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.538, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.596, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.654, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.712, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.770, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.828, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.886, y*0.16, x*0.033, y*0.3);
	context.rect(x*0.944, y*0.16, x*0.033, y*0.3);
	
	
	//bot aisles
	context.rect(x*0.25, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.308, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.364, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.422, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.480, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.538, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.596, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.654, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.712, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.770, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.828, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.886, y*0.5, x*0.033, y*0.3);
	context.rect(x*0.944, y*0.5, x*0.033, y*0.3);
	
	context.stroke();
	
	var rad = document.getElementById("rad");
	rad.style.display = "none";
	var a = document.getElementById("abt");
	a.style.display = "block";
}


	
