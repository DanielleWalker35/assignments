var rs = require("readline-sync");

//prompts
    // get one number
    var x = Number(rs.question("Pick an integer\n"));
     //get anoter number
    var y = Number(rs.question("Pick an integer\n"));
     //choose operation
    var operations = ["+", "-", "*", "/"];
    var operator = parseInt(rs.keyInSelect(operations, "Choose the operation you wish to perform") + 1);

//chooser funciton
    //selects which function to perform, and calls it using the numbers as arguements
function answer(x, y, operator) {
    switch(operator) {
        case 1:
            add(x, y);
            break;
        case 2:
            sub(x, y);
            break;
        case 3:
            mul(x, y);
            break;
        case 4:
            divide(x, y);
     }
}
answer(x, y, operator);     

//arithmetic functions

function add(x, y) {
    console.log("The result is: ", x + y);
}

function sub(x, y) {
   console.log("The result is: ", x - y);
}

function mul(x, y) {
    console.log("The result is: ", x * y);
}

function divide(x, y) {
    console.log("The result is: ", x / y);
}