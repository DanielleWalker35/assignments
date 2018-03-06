var box = document.getElementById("box");

box.addEventListener("mouseover", colorChange);

function colorChange() {
    box.style.backgroundColor = "blue";
}
box.addEventListener("mouseout", colorReturn);

function colorReturn() {
    box.style.backgroundColor = "pink";
}

box.addEventListener("mousedown", goRed);

function goRed() {
    box.style.backgroundColor = "red";
}
box.addEventListener("mouseup", goYellow);

function goYellow() {
    box.style.backgroundColor = "yellow"; 
}

box.addEventListener("dblclick", goGreen);

function goGreen() {
    box.style.backgroundColor = "green"; 
}

window.addEventListener("scroll", goOrange);

function goOrange() {
    box.style.backgroundColor = "orange"; 
}

window.addEventListener("keyup", pressKey);

function pressKey(event) {
// console.log(event);
    if (event.keyCode == 66) {
        box.style.backgroundColor = "blue";
    } else if (event.keyCode == 80) {
        box.style.backgroundColor = "pink";
    } else if (event.keyCode == 82) {
        box.style.backgroundColor = "red";
    } else if (event.keyCode == 89) {
        box.style.backgroundColor = "yellow";
    } else if (event.keyCode == 71) {
        box.style.backgroundColor = "green";
    } else if (event.keyCode == 79) {
        box.style.backgroundColor = "orange";
    } 
}