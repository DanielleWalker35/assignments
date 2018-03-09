var rs = require("readline-sync");

var firstName = rs.question("What is your name? ");
console.log("Hi, " + firstName.toLocaleUpperCase() + "!");

var numLetters = rs.question("What is your favorite color? "); 
console.log("That has " + numLetters.length + " letters in it.");

var oneQuestion = rs.question("What is your favorite food? ");
console.log(oneQuestion + "....interesting.");

var twoQuestion = rs.question("How do you like your food prepared? ");
console.log("So you like " + twoQuestion.concat(oneQuestion) +"?");

var longWord = rs.question("Type in at least 25 characters please ");
console.log(longWord.slice(longWord.length/2, longWord.length));

var whereStart = rs.question("Pick a number between 1 and how many letters you entered? ")
console.log(longWord.slice((whereStart - 1), longWord.length));