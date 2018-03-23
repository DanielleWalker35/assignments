//let is a block scoped variable
//var is a function scoped variable

// var will override anything unless it is in a function
// let is only applicable in the block it is in.  It won't change anything outside of that block

//use const first unless you absolutely need to use let

//template literals
// console.log(`Hello ${person.name} can continue the string ${person.age} etc.`)


//spread operators
//const num 1 = [1, 2, 3, 4, 5];
//const num 2 = [6, 7, 8, 9, 10];
// const num 3 = [1, 2, ...num2, 3, 4,5];
//const num 3 = [...num1...num2];
// to copy an array do this  
//const orig = [1, 2, 3, 4, 5];
//const copy = [...orig];

//deconstructing or destructuring 
//const names = ["ilian", "Danielle", "Will", "morgan", "Laney", "Matt W"];
//let [a, , , b, c, ] = names;
//console.log(a, b, c);
//const { bedrooms, bath, kitchen, price} = house;

//default parameters
//


const name = 'John'  
const age = 101  
let pets = ["cat", "dog"]

let petObjects = []

for (let i = 0; i < pets.length; i++){  
  let pet = {type: pets[i]}
  if (pets[i] === "cat"){
    let name = "fluffy"
  } else {
    let name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}
console.log(petObjects);