console.log("klappts?");

/* 
Frage

per input verschiedene Formen von Farben in js übergeben
1. #22222
2. pink 
3. rgb(255, 0, 0)
4. rgba(255, 0, 0, 0.4)

auf button clicken

dann wird hintergrundfarbe verändert

*/



// Variable 
let inputColor = document.querySelector("#inputColor");

let button = document.querySelector("#button");

let outputBody = document.querySelector("body");


// Event Listener
button.addEventListener("click", farbWechsel);


// function
function farbWechsel() {
    console.log("function startet und EventListern läuft");

    inputFarbVariationen = inputColor.value
    console.log("inputColor: " + inputColor.value);   

    outputBody.style.backgroundColor = inputFarbVariationen
}

