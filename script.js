var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
			"linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 
			//the above line is changing the background style by adding a css code for a gradient bacground. 
			//notice its using css syntax

	css.textContent = body.style.background + ";"; //adds a text content to the html
}

css.textContent;

color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);


