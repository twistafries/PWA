
function showRad() {
	var radDiv = document.getElementById("rad");
	var a = document.getElementById("abt");
	radDiv.style.display = radDiv.style.display === 'none' ? 'block' : 'none';
	a.style.display = a.style.display === 'block' ? 'none' : 'block';
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
	
	//container
	context.rect(0, 0, x, y);
	
	var sections = [
		//top and leftmost
		//context.rect(x*0.08, 0, x, y*0.05);
		{"x":x*0.08, "y":0, "width":x, "length":y*0.05},
		{"x":0, "y":y*0.04, "width":x*0.05, "length":y},
		//1 - 6
		{"x":x*0.08, "y":y*0.3, "width":x*0.06, "length":y*0.13},
		{"x":x*0.16, "y":y*0.3, "width":x*0.06, "length":y*0.13},
		{"x":x*0.08, "y":y*0.5, "width":x*0.06, "length":y*0.13},
		{"x":x*0.16, "y":y*0.5, "width": x*0.06, "length":y*0.13},
		{"x":x*0.08, "y":y*0.7, "width":x*0.06, "length":y*0.13},
		{"x":x*0.16, "y":y*0.7, "width": x*0.06, "length":y*0.13},
		
		//top aisles
		{"x":x*0.25, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.308, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.364, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.422, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.480, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.538, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.596, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.654, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.712, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.770, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.828, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.886, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		{"x":x*0.944, "y":y*0.16, "width":x*0.033, "length":y*0.3},
		
		//bot aisles
		{"x":x*0.25, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.308, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.364, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.422, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.480, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.538, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.596, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.712, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.654, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.770, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.828, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.886, "y":y*0.5, "width":x*0.033, "length":y*0.3},
		{"x":x*0.944, "y":y*0.5, "width":x*0.033, "length":y*0.3}
	];
	
	var inputs = document.getElementsByTagName('input');
	
	for(var i in sections){
		context.rect(sections[i].x, sections[i].y, sections[i].width, sections[i].length);
		for(var j = 0; j < inputs.length; j++){
			if(inputs[j].checked && i == j){
				context.fillStyle = '#91b4ff';
				context.fillRect(sections[i].x, sections[i].y, sections[i].width, sections[i].length);
			}
		}
	}
	

	
	//paint
	context.stroke();
	var rad = document.getElementById("rad");
	rad.style.display = "none";
	var a = document.getElementById("abt");
	a.style.display = "block";
}