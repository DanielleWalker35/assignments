class Player {
    constructor(args) {
        this.name = args.name;
        this.totalCoins = args.totalCoins;
        this.star = true;
        this.status = "";
        this.gameActive = true;
        this.hits = 0;
    }
    setName(namePicked) {
        this.name = namePicked;
    }
    gotHit() {
        this.hits++;
        if (this.hits === 0){
            this.status = "Powered Up";
        } else if (this.hits === 1){
            this.status = "Big";
        } else if (this.hits === 2){
            this.status = "Small";
        } else {
            this.status = "Dead";
            this.gameActive = false;
        }
    }
    gotPowerup(){
       this.hits--;
        this.gotHit();
    }
    addCoin(num) {
        this.totalCoins += num;
    }
    print(){
        console.log(`
        - Name: ${this.name},
        - Total Coins: ${this.totalCoins},
        - Status: ${this.status},
        - Star: ${this.star}`);
    }

}
 function getRandom(obj) {
    let getRandom = Math.floor(Math.random() * (2 + 1));
    if (getRandom === 0) {
        obj.gotHit();
    } else if (getRandom === 1) {
        obj.gotPowerup();
    } else {
        obj.addCoin(5);
    }
}

const player = new Player ({name: "Danielle", totalCoins: 10, star: false,});
player.setName("Luigi");
getRandom(player);
player.print();
getRandom(player);
player.print();
getRandom(player);
player.print();

// player.getRandom();
// console.log(player);

// function gotHit() {
//     console.log("got hit is working");
// }

// function gotPowerup() {
//     console.log("got power up is working");
// }

// function addCoin() {
//     console.log("add Coin is working");
// }