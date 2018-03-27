const animals = ("dog", "cat", "mouse", "jackolope", "platypus");
const collectAnimals = (...str) => str;

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

//Make a food object with the array names as properties using Object Literals:
const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrit"];

const food = {
    fruit,
    sweets,
    vegetables
};

console.log(food);

//Use destructuring to fill in the blanks and use the property names as variables:

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

//your code
const { location } = vacation;
const { duration } = vacation;

console.log(`We're going to have a good time in ${location} for ${duration}`);

//Use destructuring to make this code ES6:
//   const firstItem = items[0];  
//   const [firstItem] = items;

//Write destructuring code to assign variables that will help us print the expected string. Also, change the string to be using Template literals:

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// your code
const [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder;

console.log(`My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`);

//Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in.

const combineAnimals = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3];


const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

//Try to make the following function more ES6xy:
const product = (a, b, c, d, e) => (numbers = [a, b, c, d, e]).reduce((acc, number) => (acc * number)
    , 1);

//Make the following function more ES6xy. Use at least both the rest and spread operators:
const str = "a, b, c, d, e"
const unshift = (array, ...str) => [str, ...array];


//Write some destructuring code to help this function out. Use object literals to simplify it:

const populatePeople = names => names.map(name => {
    name = name.split(" ");
    const [firstName, lastName] = name;
    return {
        firstName,
        lastName
    }
});

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]