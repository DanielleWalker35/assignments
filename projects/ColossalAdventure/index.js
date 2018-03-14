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

    function addEnemy(name, hitPoints) {
        var n = new Enemy(name, hitPoints);
        enemies.push(n);
    }
    addEnemy("Crazy Eyes", 30);
    addEnemy("Slimy Dude", 15);
    addEnemy("Yuck Face", 10);
    //if wild enemy appears - randomly select a number between 1-3 that represents one of three enemies
    var getEnemy = enemies[Math.floor(Math.random() * enemies.length)];

    //create a function to ask user to choose attack or run
    var options = ["Attack", "Run"];
    var option = true;
    //     toFight = rs.keyInSelect(options, "What do you want to do now?");
    // console.log("So you want to " + toFight + ...);


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
                console.log("So you want to " + options[toFight]);

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
                // console.log("Safe for now keep walking");
                break;
        }

    }
    var myInventory = [];
    var inventory = ["gold bar", "trophy", "rare gem", "silver", ];
    var getItem = inventory[Math.floor(Math.random() * inventory.length)];
    // while (option) {
    switch (toFight) {
        case 0:
            var attackPower = Math.floor(Math.random() * 40 + 10);
            console.log("Your attack power is " + attackPower + ". You did some serious damage.");
            //did you kill the enemy. or did he get away.
            if (attackPower > enemy.hitPoints) {
                console.log("Great Job you killed him!");
                //add item to my inventory and increase hitpoints
                myInventory.push(getItem);
                console.log("Awesome! Your inventory now contains: " + myInventory);
            } else {
                console.log("Shoot you hurt him but he is not dead yet.")
            }
            // option = false;
            break;
        case 1:
            var run = Math.floor(Math.random() * 2 + 1);
            if (run = 1) {
                console.log("Whew, that was close you got away this time.")
            } else if (run = 2) {
                console.log("Oh no you didn't quite escape. Now you must fight.");
                options = options[0];
            };
            // option = false;
            break;
    };
    // };



    //if attack - 


    //while loop continues as long as my hp is >1 or my winCon is not met
    // var player = {
    //     name: playerName,
    //     hp: 100,
    //     attack: undefined,
    //     enemiesKilled: 0,
    // }
    // var Enemy = function() {
    //     this.attack = Math.floor(Math.random() * 20) + 10;
    //     this.hp = 50;
    // }
    // while(player.hp > 0 && player.enemiesKilled < 3) {

    // }
    // if(conditions for winning and loosing)
}
playTheGame();