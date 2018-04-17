## ES6 Practice - Object Literals, Destructuring, Rest and Spread Operators

Each problem is marked using Ski Slope difficulty ratings. Become a double black diamond ES6 writer!

Rest and Spread Operator

Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

function collectAnimals() {  

}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");  
// ["dog", "cat", "mouse", "jackolope", "platypus"]
Make a food object with the array names as properties using Object Literals:

const fruit = ["apple", "pear"];  
const sweets = ["cake", "pie"];  
const vegetables = ["carrit"];

const food = {.....}  
Use destructuring to fill in the blanks and use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

//your code

console.log(`We're going to have a good time in ${location} for ${duration}`)  
Use destructuring to make this code ES6:

const firstItem = items[0];  
Use destructuring to make this code ES6:

const firstItem = items[0];  
Write destructuring code to assign variables that will help us print the expected string. Also, change the string to be using Template literals:

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// your code

console.log("My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav");  

Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in.

function combineAnimals() {  

}

const realAnimals = ["dog", "cat", "mouse"];  
const magicalAnimals = ["jackolope"];  
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


Try to make the following function more ES6xy:

function product(a, b, c, d, e) {  
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
Make the following function more ES6xy. Use at least both the rest and spread operators:

function unshift(array, a, b, c, d, e) {  
  return [a, b, c, d, e].concat(array);
}

Write some destructuring code to help this function out. Use object literals to simplify it:

function populatePeople(names){  
    return names.map(function(name){
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
}

populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])  
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]