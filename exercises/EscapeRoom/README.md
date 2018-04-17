## Escape Room

Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.

Game start:
Tell the user their options:

Put hand in hole
Find the key, or
Open the door
They can't open the door unless they find the key first. 
They die if they put their hand in the hole.

JavaScript tools that may help
while loop
variables
booleans
if/else if/else OR switch statement
readline-sync (syntax for installing and using below)
To use readline-sync in your game:
In terminal:

# cd into escape room's folder
npm install readline-sync  
In your JavaScript code:

var readline = require("readline-sync");  
var name = readline.question("What is your name? ");  