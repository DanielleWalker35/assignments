var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var letters = "abcdefghijklmnopqrstuvwxyz";
var newString = "";

function move(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < letters.length; j++) {
            if (str[i] === letters[j]) {
                if ((j + shift) >= letters.length) {
                    newString += letters[(j + shift) % 26];
                } else {
                    newString += letters[j + shift];
                }
            }
            
        }
    }

    console.log(newString);
};
move(input);