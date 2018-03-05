function info(str1, str2) {
    var truth = str1.concat(" is awesome! ");
    var who = str2.concat(" says.")

    console.log(truth.concat(who.toUpperCase()));



}
info("Danielle", "Everyone");


function love(str) {
    var change = str.slice(0, 17);
    var newGirl = change.replace("Sarah", "Betty");
    console.log(newGirl.toLowerCase());
}

love("Peter loves Sarah more than anything.")

function locating(str) {
    var whereYou = str.indexOf("you");
    var whatNum = str.lastIndexOf("the");
    return whereYou + whatNum;
}
console.log(locating("who is the craziest person you know?"));


function veggies(str) {
    var cVeggies = str.match(/cucumber|carrot|peas/g);
    var backToString = cVeggies.toString();
    var veg = backToString.substr(0, 15);
    var cucumberCarrot = veg.split(",");

    return cucumberCarrot.reverse();
}

console.log(veggies("cucumber, carrot, celery, pepper, peas"));