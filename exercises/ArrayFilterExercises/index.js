function findNumbers(x) {
    return x >= 5;
}

function fiveAndGreaterOnly(arr) {
   return arr.filter(findNumbers);
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));


function hereAreEvens(x){
    return x % 2 === 0;
}
function evensOnly(arr) {
    return arr.filter(hereAreEvens);
}

console.log(evensOnly([3, 6, 8, 2]));


function fiveCharStrings(x) {
    return x.length <= 5;
}
function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(fiveCharStrings);
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));


var peopleWhoBelong = [  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
];

function letsFindThem (obj){
    return obj.member === true;
}

function peopleWhoBelongToTheIlluminati(arr){
return arr.filter(letsFindThem);
}

console.log(peopleWhoBelongToTheIlluminati(peopleWhoBelong));


var peepsOfAge = [  
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
]

function notOldEnough(obj) {
    return obj.age >= 18;
}
function ofAge(arr){
return arr.filter(notOldEnough);
}

console.log(ofAge(peepsOfAge));

