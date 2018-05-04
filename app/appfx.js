var xhr;
var url = 'resources/dimensions.json';
var sections;
var chk;
var lbl;

function getFetch(){
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			sections = JSON.parse(this.responseText);
		}
	}
	xhr.open('GET', url, true);
	xhr.send();
}

function drawButton(name, i){
	chk = document.createElement("input");
	//rad = document.getElementById("rad");
	chk.type = "checkbox";
	chk.className = "check";
	chk.name = name;
	chk.value = name;
	chk.id = "item"+i;
	
	lbl = document.createElement("label");
	lbl.htmlFor = chk.id;
	lbl.className = "cblabel";
	lbl.appendChild(document.createTextNode(i + " " + name));
	
	rad.appendChild(chk);
	rad.appendChild(lbl);
	console.log(chk.checked);
}

function makeHTML(){
	for(var i in sections){
		drawButton(sections[i].name, i);
	}
}

window.onload = function(){
	getFetch();
}

function showRad() {
	var radDiv = document.getElementById("rad");
	var a = document.getElementById("abt");
	radDiv.style.display = radDiv.style.display === 'none' ? 'block' : 'none';
	a.style.display = a.style.display === 'block' ? 'none' : 'block';
	var existingID = document.getElementById("item1");
	console.log(existingID);
	if(existingID == null){
		makeHTML();
	}
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
	
	var inputs = document.getElementsByTagName('input');
	var k = 8;
	for(var i in sections){
		context.rect(sections[i].x*x, sections[i].y*y, sections[i].width*x, sections[i].length*y);
		
		for(var j = 0; j < inputs.length; j++){
			if(inputs[j].checked && i == j){
				context.fillStyle = '#91b4ff';
				context.fillRect(sections[i].x*x, sections[i].y*y, sections[i].width*x, sections[i].length*y);
				//context.textAlign="center";
				//context.textBaseline = "middle";
				context.fillStyle = "black";
				context.font = x/40 + 'px Calibri';
				context.fillText(j, sections[i].x*x, sections[i].y*y);
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


