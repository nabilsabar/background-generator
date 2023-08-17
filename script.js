var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");


function setGradient(){
    body.style.background =
    "linear-gradient(to right, "
    + color1.value 
    + "," 
    + color2.value 
    + ")";

css.textContent = body.style.background + ";";

}

function getRandomColor() {
    // Generates a random color in hexadecimal format (#RRGGBB)
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function setRandomColors() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

document.addEventListener("DOMContentLoaded", setGradient);
randomButton.addEventListener("click", setRandomColors);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
