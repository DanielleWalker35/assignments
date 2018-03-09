var ask = require("readline-sync");

var playTheGame = function() {
    var playerName = ask.question("Hey what is your name?");
    console.log("Thanks " + playerName + "! Nice to meet you!");
    if (playerName === "Ben") {
        console.log("Go away Ben!");
        keepPlaying =false;
    } else if (playerName === "Jamie") {
        console.log("Great! You won!")
        keepPlaying = false;
    }
}

while(keepPlaying) {
    playTheGame();
}