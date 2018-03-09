var rs = require("readline-sync");

// var playTheGame = function() {
//     var playerName = ask.question("Hey what is your name?");
//     console.log("Thanks " + playerName + "! Nice to meet you!");
//     if (playerName === "Ben") {
//         console.log("Go away Ben!");
//         keepPlaying =false;
//     } else if (playerName === "Jamie") {
//         console.log("Great! You won!")
//         keepPlaying = false;
//     }
// }

// while(keepPlaying) {
//     playTheGame();
// }

var playTheGame = function () {
    var name = rs.question("What is your name? ");
    console.log("Hello, " + name + " I hate to tell you this, but you are locked in a room!");

    //give them their options 1,2,3

    var choices = ["Put hand in hole ", "Find the key ", "Open the door"];
    var choice = rs.keyInSelect(choices, "You have three options pick one and decide your fate...");
    var result = "";
    var keepPlaying = true;
    while(keepPlaying) {
    switch (choice) {
        case 0:
            console.log("Sorry you are dead!");
            keepPlaying = false;
            break;
        case 1:
            result = "2";
            choice = rs.keyInSelect(choices,"You've found the key!  What next? Pick another number ");
            keepPlaying = true;
            break;
        case 2:
            if (result === "2") {
                keepPlaying = false;
                console.log("You unlocked the door! You won!")
                break;
            } else {
            choice = rs.keyInSelect(choices,"This door is locked.  What next? Pick another number ");
            }
            keepPlaying = true;
            break;
    }
};
    // while(keepPlaying) {
    //     playTheGame();
    // };

    //if they pick 1 - they die
    //if they pick 2 - they find the key and pick again
    //if they pick 3 - the door is locked they need to pick again
    // if they pick 2 then 1 they die
    //if they pick 2 then 3 they open the door and win
    //if they pick 3 then 1 they die
    // if they pick 3 then 2 they  find the key and pick again

}

playTheGame();