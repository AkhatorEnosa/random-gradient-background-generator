// initialize parts of the webpage
var body = document.getElementById("gradient");
var circle = document.querySelector(".circle");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colVal1 = document.querySelector(".color-1");
var colVal2= document.querySelector(".color-2");
var button = document.querySelector(".button");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var tooltip = document.querySelector(".tooltiptext");
var hiddenInput = document.querySelector(".copy");
var modalClose = document.querySelector(".modal-close");
var randomValue = "a789bc456a789bc456def1230def12a789bc456def123030";

document.querySelector(".buttons").style.opacity = 1;

function setRandomValue1(){
	var shuffled = randomValue.split('').sort(function(){
		return 0.5-Math.random()
	}).join('');
	
	return shuffled.substring(0,6);
}

function setRandomValue2(){
	var shuffled = randomValue.split('').sort(function(){
		return 0.5-Math.random()
	}).join('');
	
	return shuffled.substring(0,6);
}

function getAndSetGradient() {
	circle.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value + ")";
	hiddenInput.value = circle.style.background;
	colVal1.textContent = "(Hex)>  " + color1.value;
	colVal2.textContent = "(Hex)>  " + color2.value;
}

function newGradientValue(){
	color1.value = "#" + setRandomValue1();
	color2.value = "#" + setRandomValue2();
	// colVal1.textContent = "(Hex)>  " + color1.value;
	// colVal2.textContent = "(Hex)>  " + color2.value;
	getAndSetGradient();
}

function addBackground() {
	body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value + ")";
	document.querySelector("h1").style.cssText = "color: white; background: rgba(0,0,0,0.5); padding: 10px; border-radius: 10px;";
	colVal1.style.cssText = "color: white; background: rgba(0,0,0,0.5); padding: 5px; border-radius: 4px;";
	colVal2.style.cssText = "color: white; background: rgba(0,0,0,0.5); padding: 5px; border-radius: 4px;";
	button.style.border = "none";
	button1.style.border = "none";
	button2.style.border = "none";
}

function copyText(){
	
	/* Select the text field */
	hiddenInput.select();
	hiddenInput.setSelectionRange(0, 99999); /*For mobile devices*/
	
	/* Copy the text inside the text field */
	if (document.execCommand("copy")) {
		tooltip.style.visibility = "visible";
		tooltip.style.opacity = 1;

		setTimeout(() => {
			hiddenInput.style.visibility = "hidden";
		}, 10);

		// console.log(true);

		setTimeout(() => {
			tooltip.style.visibility = "hidden";
			tooltip.style.opacity = 0;
		}, 2500);

		console.log(true)
	} else {
		console.log(false)
	}
	
	/* Alert the copied text */
	// alert("Gradient background color: " + hiddenInput.value + " copied to clipboard!");
}

function closeModal() {
	document.querySelector(".modal").parentNode.removeChild(document.querySelector(".modal"));
}

window.addEventListener("load", getAndSetGradient);

window.addEventListener("load", newGradientValue);

button.addEventListener("click", newGradientValue);

button1.addEventListener("click", addBackground);

button2.addEventListener("click", copyText);

color1.addEventListener("input", getAndSetGradient);

color2.addEventListener("input", getAndSetGradient);

modalClose.addEventListener("click", closeModal);
