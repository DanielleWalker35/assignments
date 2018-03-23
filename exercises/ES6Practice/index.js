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

// the key word this  is always an object and always context dependant and always refers to the object which called the function

//never a good idea to make methods an innumerable property on an object

//sometimes we don't want the this keyword to refer to the object that called it




const name = 'John'  
const age = 101  
const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++){  
  const pet = {type: pets[i]}
  let name;
  if (pets[i] === "cat"){
    name = "fluffy"
  } else {
    name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}
console.log(petObjects);
console.log(name);

const vegetables = carrots.map(function(carrot){  
  return {type: "carrot", name: carrot}
});

const vegetables = carrots.map(carrot=> ({type: "carrot", name: carrot}));

friends = people.filter(function(person){  
  return !!person.friendly
})
friends = people.filter(person => !!person.friendly);

const doMathSum = (a, b) => a + b;

var produceProduct = (a, b) => a * b;

const phrase = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
console.log(phrase());

const dogs = animals.filter((animal) => (animal.type === "dog"));
  
const vacay = (location="Hawaii", name="Janice") => `Hi ${name}! 

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;

console.log(vacay());