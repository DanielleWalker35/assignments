function doubleNumbers(x) {
    return x * 2;
}

function doubleArr(arr) {
    return arr.map(doubleNumbers);
}
console.log(doubleArr([2, 4, 100]));


function stringItUp(x) {
    return x.toString();
};

function arrToString(arr) {
    return arr.map(stringItUp);
};
console.log(arrToString([2, 5, 100]));

function capitalizeNames(x){
return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
}
function capitalizeFirst(arr) {
    return arr.map(capitalizeNames);
}
console.log(capitalizeFirst(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]))


function namesOnly(person){
return person.name;
}

var objNames = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];
function justNames (arr) {
    return arr.map(namesOnly);
}
console.log (justNames(objNames));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// var canYouGo = [];
function makeStrings(obj){
 if (obj.age >= 18) {
return obj.name + " can go to the Matrix!"
 } else if (obj.age < 18){
     return obj.name + " canNOT got to the Matrix!"
 }
}


var movieGoers = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

function whoCanGo (arr) {
    return arr.map(makeStrings);
}

// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]
console.log(whoCanGo(movieGoers));


function putInHeadings(obj) {
        return "<h1>" + obj.name + "<h1>" + "<h2>" + obj.age + "<h2>";
};

function putInTheDom (arr) {
    return arr.map(putInHeadings);
}
console.log(putInTheDom(movieGoers));