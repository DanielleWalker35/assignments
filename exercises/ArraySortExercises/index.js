function sortingLeast(a, b) {
    return a - b;
}

function leastToGreatest(arr) {
return arr.sort(sortingLeast);
}

var leastToGreat = [1, 3, 5, 2, 90, 20];

console.log(leastToGreatest(leastToGreat));

function sortingGreat(a, b) {
    return b - a;
}
function greatestToLeast(arr) {
return arr.sort(sortingGreat);
}

console.log(greatestToLeast(leastToGreat));

function shortest(a, b){    
return a.length - b.length;
}
function lengthSort(arr) {
return arr.sort(shortest);
}

var lengthStr = ["dog", "wolf", "by", "family", "eaten"];

console.log(lengthSort(lengthStr));

//Sort an array alphabetically

function alphabetical(arr) {
return arr.sort();
};
console.log(alphabetical(lengthStr));

//Sort the objects in the array by age
function sortAge(a, b) {
    return a.age - b.age;
}
function byAge(arr){
return arr.sort(sortAge);
}

var age = [  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
];

console.log(byAge(age));