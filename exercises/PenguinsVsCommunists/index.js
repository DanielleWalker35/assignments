class Fighter {
    constructor(name) {
        this.name = name;
        this.population = 1.0e+6;
    }
};
const penguins = new Fighter("Penguins");
const communisits = new Fighter("Communists");
//while loop here
const flipCoin = Math.floor((Math.random() * 2) + 1);
if (flipCoin === 1) {
    //penguins attack
    sendNuke(penguins, communisits, onHit, onMiss);
} else {
    //communists attack
    sendNuke(communisits, penguins, onHit, onMiss);
};
function onHit(party, party2) {
    let damage = Math.floor((Math.random() * 500000) + 100000)
    party2.population = party2.population - damage;
    console.log(`OUCH that hurt, the ${party.name} killed ${damage} of the ${party2.name}' population.`);
    // console.log(communisits);
    // console.log(penguins);
    if (penguins.population > 0 && communisits.population > 0) {
        sendNuke(party2, party, onHit, onMiss);
    } else {
        // console.log("check point");
    }
}

function onMiss(party, party2) {
    console.log(`The ${party.name}' nuke missed the ${party2.name} and instead landed in the ocean`);
    if (penguins.population > 0 && communisits.population > 0) {
        sendNuke(party2, party, onHit, onMiss);
    } else {
        // console.log("check point2");

    }
}

function sendNuke(party, party2, onHit, onMiss) {
    let isAttacking = Math.floor((Math.random() * 2) + 1);
    if (isAttacking === 1) {
        onHit(party, party2);
    } else {
        onMiss(party, party2);
    }
}

if (penguins.population <= 0) {
    console.log("Penguins you lose!!!")
    console.log(penguins);
} else {
    console.log("Communists you lose!!!")
    console.log(communisits);
}
    // console.log(communisits);
    // console.log(penguins);


