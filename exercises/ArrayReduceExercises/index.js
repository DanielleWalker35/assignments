//Turn an array of numbers into a total of all the numbers

function totes(total, num) {
    return total + num;
}

function total(arr) {
    return arr.reduce(totes);
}

var totalNum = [1, 2, 3];

console.log(total(totalNum));

//Turn an array of numbers into a long string of all those numbers.
function longStr(total, num) {
    return total + num.toString();
}

function stringConcat(arr) {
    return arr.reduce(longStr);
}

var stringNum = [1, 2, 3] // "123" 
console.log(stringConcat(stringNum));

//Turn an array of voter objects into a count of how many people voted
function getVoters(total, num) {
    return total + num.voted;
}

function totalVotes(arr) {
    return arr.reduce(getVoters, 0);
}

var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];
totalVotes(voters) // 7  

console.log(totalVotes(voters));

//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function buyIt(total, num) {
    return total + num.price;
}

function shoppingSpree(arr) {
    return arr.reduce(buyIt, 0);
}

var wishlist = [{
        title: "Tesla Model S",
        price: 90000
    },
    {
        title: "4 carat diamond ring",
        price: 45000
    },
    {
        title: "Fancy hacky Sack",
        price: 5
    },
    {
        title: "Gold fidgit spinner",
        price: 2000
    },
    {
        title: "A second Tesla Model S",
        price: 90000
    }
];

shoppingSpree(wishlist) // 227005  
console.log(shoppingSpree(wishlist));

//Given an array of arrays, flatten them into a single array
function flatArr(total, num) {
    return total.concat(num);
}

function flatten(arr) {
    return arr.reduce(flatArr);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];

console.log(flatten(arrays));

//Given an array of potential voters, return an object representing the results of the vote

var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];


function findVoters(total, num) {
    var totalVoters = {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0
    };
    switch (num) {
        case num.age <= 25:
            num.youth++
            break;
        case num.age > 25 && num.age <= 35:
            mids = total + num.voted;
            break;
        case num.age > 35:
            olds = total + num.voted;
            break;

    }
    return totalVoters;
}

function voterResults(arr) {
    return arr.reduce(findVoters, 0);
}

console.log(voterResults(voters)) // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/