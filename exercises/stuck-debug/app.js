var ask = require("readline-sync");
var play = function () {
  var options = ['pick flowers', 'shoot guns', 'fight bears'];
  var option = true;
  var choice = ask.keyInSelect(options, "What would you like to do today?: ");
  while (option) {
    switch (choice) {
      case 0:
        console.log("You pick some flowers. You make a bouquet.");
        option = true;
        choice = ask.keyInSelect(options, "What else would you like to do today?: ");
        break;
      case 1:
        console.log("You shoot guns.");
        option = true;
        choice = ask.keyInSelect(options, "What else would you like to do today?: ");
        break;
      case 2:
        console.log("You fought a bear and got beat up!");
        option = false;
        break;
    }
  }
}

play();