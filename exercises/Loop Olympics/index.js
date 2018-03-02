for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 9; i >= 0; i--) {
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

var numbers = [];
for (var i = 0; i < 10; i++) {
    numbers.push(i);
}
console.log(numbers);


for (var i = 0; i <= 100; i++) {
    if ((i % 2) == 0) {
        console.log(i);
    }
}
var newFruit = []
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var i = 0; i < fruit.length; i += 2) {
    newFruit.push(fruit[i]);
}
console.log(newFruit);


var peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]
for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

var names = []
var occupations = []
for (var i = 0; i < peopleArray.length; i++) {
names.push(peopleArray[i].name);
occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

var newNames = []
var newOccupations = []
for (var i = 0, x = 1; i < peopleArray.length; i += 2, x += 2) {
    newNames.push(peopleArray[i].name);
    newOccupations.push(peopleArray[x].occupation);
}
console.log(newNames);
console.log(newOccupations);

var output = [];
for (var i = 0; i <3; i++) {
    //all the code here get run 3 times
    output.push([]);
    for (var j = 0; j <3; j++){
    //all the code here get run 3 times
        output[i].push(0);
    }
}
console.log(output);

var output = [];
for (var i = 0; i <3; i++) {
    //all the code here get run 3 times
    output.push([]);
    for (var j = 0; j <3; j++){
    //all the code here get run 3 times
        output[i].push(i);
    }
}
console.log(output);

var output = [];
for (var i = 0; i <3; i++) {
    //all the code here get run 3 times
    output.push([]);
    for (var j = 0; j <3; j++){
    //all the code here get run 3 times
        output[i].push(j);
    }
}
console.log(output);
