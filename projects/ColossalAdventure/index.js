var rs = require("readline-sync");

var playTheGame = function () {
    console.log("Hi-dee Ho, Neighbor!");
    var playerName = rs.question("What is your name? ");

    //create an array of enemies
    var enemies = [];
    var Enemy = function (name, hitPoints) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.attack = Math.floor(Math.random() * 20) + 10;
    }
    var fight = false;

    function addEnemy(name, hitPoints) {
        var n = new Enemy(name, hitPoints);
        enemies.push(n);
    }
    addEnemy("Crazy Eyes", 40);
    addEnemy("Slimy Dude", 35);
    addEnemy("Yuck Face", 30);
    //if wild enemy appears - randomly select a number between 1-3 that represents one of three enemies
    var getEnemy = enemies[Math.floor(Math.random() * enemies.length)];
    //create a function to ask the user to attack or run
    var options = ["Attack", "Run"];
    var option = false;
    //put play the game while loop here
    //ask the user to press w to move forward
    var isWalk = rs.keyIn("Press 'w' to walk!\n", {
        limit: 'w'
    });
    //each time they push w randomly select a number between 1-3 to see if attacked
    while (isWalk) {
        //generate a number between 1-3
        var isAttacked = Math.floor(Math.random() * 3 + 1);
        //if 1... if 2... if 3...
        switch (isAttacked) {
            case 1:
                console.log("Oh no a monster!!!");
                var enemy = getEnemy;
                console.log(enemy);
                toFight = rs.keyInSelect(options, "What do you want to do now?");
                console.log("So you want to " + options[toFight]); //here I need to call the fight function
                if (toFight === 0) {
                    fight = true;
                } else if (toFight === 1) {
                    running();
                    // running();
                }
                isWalk = false;
                break;
            case 2:
                // console.log("Safe for now keep walking");
                isWalk = rs.keyIn("Safe for now, press 'w' to walk again!\n", {
                    limit: 'w'
                });
                break;
            case 3:
                isWalk = rs.keyIn("safe for now, press 'w' to walk again!\n", {
                    limit: 'w'
                });
                break;
        }

    };
    var currentEnemy = enemy;
    // console.log(currentEnemy);

    var inventory = ["a gold bar", "a trophy", "a rare gem", "silver coins", ];
    var getItem = inventory[Math.floor(Math.random() * inventory.length)];
    var player = {
        name: playerName,
        hitPoints: 100,
        // attack: undefined,
        enemiesKilled: 0,
        inventory: myInventory,
    }

    function hitPoints() {
        player.hitPoints += 20;
        player.enemiesKilled++;
        player.inventory = myInventory;
    }

    function win() {
        console.log("Great Job you killed him!");
        //add item to my inventory and increase hitpoints
        myInventory.push(getItem);
        hitPoints();
        console.log("Awesome! You gained 20 hit points and your inventory now contains: " + myInventory);
        console.log(player);
        //need to go back to walking
    }

    function running() {
        var run = Math.floor(Math.random() * 2 + 1);
        console.log(run);
        if (run === 1) {
            console.log("Whew, that was close you got away this time.")
        } else if (run === 2) {
            console.log("Oh no you didn't quite escape. Now you must fight.");
            fight = true;
        };
    };

    //need to make one for fighting and one for running.
    while (fight) {
        // function fighting() {
        var currentEnemyHitPoints = enemy.hitPoints - attackPower;
        var myInventory = [];
        var attackPower = Math.floor(Math.random() * 20 + 10);
        console.log("Your attack power is " + attackPower + ".");
        //did you kill the enemy. or did he get away.
        if (attackPower > currentEnemyHitPoints) {
            win();
            fight = false;
        } else {
            //enemy takes damage
            currentEnemyHitPoints = enemy.hitPoints - attackPower;
            //enemy attacks back
            console.log("Shoot you hurt him but he is not dead yet. He has " + currentEnemyHitPoints + " hitpoints remaining. Watch out he is fighting back with " + enemy.attack + " attack!");
            //minus his attack from player hitPoints
            player.hitPoints = player.hitPoints - enemy.attack;
            if (enemy.attack > player.hitPoints) {
                console.log("It looks like that was too much for you. You have " + player.hitPoints + " remaining, your enemy has won!");
                //end game here - actually probably end before the console.log and add clever message when game ends???
                fight = false;
            } else {
                console.log("You have lived to fight back with your next attack! with " + player.hitPoints + " hit points remaining.");
            }
            //get current enemy attack power and minus it from my hitpoints
            //if not dead attack back
            //once someone dies continue walking or game over
            // fight = false;

        };
    };
    // };






    //if attack - 


    // while loop continues as long as my hp is >1 or my winCon is not met


    // var Enemy = function() {
    //     this.attack = Math.floor(Math.random() * 20) + 10;
    //     this.hp = 50;
    // }
    // while(player.hp > 0 && player.enemiesKilled < 3) {

    // }
    // if(conditions for winning and loosing)
}
playTheGame();