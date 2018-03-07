// var formAdd = document.getElementById("add");
// var inputX = document.getElementById("inputX").value;
// var inputY = document.getElementById("inputY").value;
// var p = document.getElementById("output"); 

document.addForm.addEventListener("submit", addInputs);

// function addInputs(event) {
//     // var input = event.target.children[0];
//     event.preventDefault();
//     var sum = inputX + inputY;
//     // input.value = x + y; 
//     p.innerHTML = sum.value;
//     // event.target.children[0].value = "";
// }

function addInputs(event) {
    event.preventDefault();
    // console.log(event);
    var x = document.addForm.inputX.valueAsNumber;
    // console.log(x);
    var y = document.addForm.inputY.valueAsNumber;
    // console.log(y);
    var p = document.getElementById("outputAdd");
    answer = x + y;
    p.innerHTML = answer;
}
document.subtract.addEventListener("submit", subInputs);


function subInputs(event) {
    event.preventDefault();
    console.log(event);
    var x = document.subtract.inputX.valueAsNumber;
    console.log(x);
    var y = document.subtract.inputY.valueAsNumber;
    console.log(y);
    var p = document.getElementById("outputSub");
    answer = x - y;
    p.innerHTML = answer;
}

document.multiply.addEventListener("submit", mulInputs);


function mulInputs(event) {
    event.preventDefault();
    console.log(event);
    var x = document.multiply.inputX.valueAsNumber;
    console.log(x);
    var y = document.multiply.inputY.valueAsNumber;
    console.log(y);
    var p = document.getElementById("outputMul");
    answer = x * y;
    p.innerHTML = answer;
}