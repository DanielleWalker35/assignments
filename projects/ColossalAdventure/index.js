var rs = require("readline-sync");

var playTheGame = function () {
    console.log("Hi-dee Ho, Neighbor!");
    var playerName = rs.question("What is your name? ");

    //create an array of enemies
    var enemies = [];
    var Enemy = function (name, hitPoints) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attack = Math.floor(Math.random() * 30) + 10;
    }
    var fight = false;
var isWalk = false;
    function addEnemy(name, hitPoints) {
        var n = new Enemy(name, hitPoints);
        enemies.push(n);
    }
    addEnemy("Crazy Eyes", 40);
    addEnemy("Slimy Dude", 35);
    addEnemy("Yuck Face", 30);
    addEnemy("Gross Monster", 25);
    addEnemy("Scary Monster", 43);
 
    //create a function to ask the user to attack or run
    var options = ["Attack", "Run"];
    var inventory = ["a gold bar", "a trophy", "a rare gem", "silver coins", ];
    var player = {
        name: playerName,
        hitPoints: 70,
        enemiesKilled: 0,
        inventory: [],
    }
    while (player.hitPoints > 0 && player.enemiesKilled < 3) {
        // while (true) {
        //     command = readlineSync.prompt("Type print to see your stats!");
        //     console.log(player);
        //   }
        //if wild enemy appears - randomly select a number between 1-3 that represents one of three enemies
        //ask the user to press w to move forward
        var walkPrint = rs.keyIn("Press 'w' to walk or 'p' to print your stats!\n", {
            limit: 'wp'
        });

        
        if (walkPrint === 'p'){
            console.log(player);
        };

        if (walkPrint === 'w'){
            isWalk = true;
        }
        //each time they push w randomly select a number between 1-3 to see if attacked
        while (isWalk) {
            //generate a number between 1-3
            var isAttacked = Math.floor(Math.random() * 3 + 1);
            //if 1... if 2... if 3...
            switch (isAttacked) {
                case 1:
                    console.log("Oh no a monster!!!");
                    var getEnemy = enemies[Math.floor(Math.random() * enemies.length)];
                    var currentEnemy = getEnemy;
                    console.log(currentEnemy);
                    toFight = rs.keyInSelect(options, "What do you want to do now?");
                    console.log("So you want to " + options[toFight]); //here I need to call the fight function
                    if (toFight === 0) {
                        fight = true;
                    } else if (toFight === 1) {
                        running();
                    }
                    isWalk = false;
                    break;
                case 2:
                    // console.log("Safe for now keep walking");
                    walkPrint = rs.keyIn("Press 'w' to walk or 'p' to print your stats!\n", {
                        limit: 'wp'
                    });
                    break;
                case 3:
                walkPrint = rs.keyIn("Press 'w' to walk or 'p' to print your stats!\n", {
                    limit: 'wp'
                });
                    break;
            }

        };

        function hitPoints() {
            player.hitPoints += 20;
            player.enemiesKilled++;
        }
        // var myInventory = [];
        function win() {
            var getItem = inventory[Math.floor(Math.random() * inventory.length)];
            console.log("Great Job you killed him!");
            //add item to my inventory and increase hitpoints
            player.inventory.push(getItem);
            hitPoints();
            console.log("Awesome! You gained 20 hit points and your inventory now contains: " + player.inventory);
            console.log(player);
            // currentEnemy = getEnemy;
            //need to go back to walking
        }

        function running() {
            var run = Math.floor(Math.random() * 2 + 1);
            // console.log(run);
            if (run === 1) {
                console.log("Whew, that was close you got away this time.")
                currentEnemy = getEnemy;
            } else if (run === 2) {
                console.log("Oh no you didn't quite escape. Now you must fight.");
                fight = true;
            };
        };
        //need to make one for fighting and one for running.
        while (fight) {
            //right now my current enemy has hitpoints of currentEnemy.hitPoints
            
            var attackPower = Math.floor(Math.random() * 20 + 10);
            console.log("Your attack power is " + attackPower + ".");
            //did you kill the enemy. or did he get away.
            if (attackPower > currentEnemy.hitPoints) {
                win();
                currentEnemy = getEnemy;
                fight = false;
            } else {
                //enemy takes damage
                currentEnemy.hitPoints = currentEnemy.hitPoints - attackPower;
                //enemy attacks back
                console.log("Shoot you hurt him but he is not dead yet. He has " + currentEnemy.hitPoints + " hitpoints remaining. Watch out he is fighting back with " + currentEnemy.attack + " attack!");
                //get current enemy attack power and minus it from my hitpoints
                player.hitPoints = player.hitPoints - currentEnemy.attack;
                if (player.hitPoints <= 0) {
                    console.log("It looks like that was too much for you. You have " + player.hitPoints + " remaining, your enemy has won!");
                    //end game here - actually probably end before the console.log and add clever message when game ends???
                    fight = false;
                } else {
                    console.log("You have lived to fight back with your next attack! with " + player.hitPoints + " hit points remaining.");
                }
                //if not dead attack back
                //once someone dies continue walking or game over

            };
        };
    };
    if (player.enemiesKilled >= 3) {
    console.log("You have just won the most amazing game in the universe!")
    } else {
        console.log("It hurts to lose but I am here for you.")
    }
}
playTheGame();