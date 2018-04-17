## ES6 Practice - Let, Const, Fat Arrow Functions, Default Arguments, Template Literals

Let and Var

Use let and const and try to use these new features

Replace all the vars with let and const

John is the pet owner, and his name should be stored differently than the other names.

var name = 'John'  
var age = 101  
var pets = ["cat", "dog"]

var petObjects = []

for (var i = 0; i < pets.length; i++){  
  var pet = {type: pets[i]}
  if (pets[i] === "cat"){
    var name = "fluffy"
  } else {
    var name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}
ES6 Functions

Fat arrow functions.
re-write this .map() using a fat arrow function:

Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const vegetables = carrots.map(function(carrot){  
    return {type: "carrot", name: carrot}
})
re-write this .filter() using a fat arrow function:

friends = people.filter(function(person){  
    return !!person.friendly
})
re-write the following functions to be fat arrow functions:

function doMathSum(a, b){  
    return a + b
}

var produceProduct = function(a, b){  
    return a * b
}
write a functions that takes a firstName, a lastName, an age and returns a string like the following: 
Hi Kat Stark, how does it feel to be 40?

firstName should default to "Jane" 
lastName should default to "Doe" 
age should default to 100

Use the shorthand syntax to make the following code block take up one line.

const dogs = animals.filter((animal)=>{  
  if (animal.type === "dog"){
    return true
  } else {
    return false
  }
})
Template Literals


Write a function that will take location and name and output this if location="Hawaii" and name="Janice":

Hi Janice!

Welcome to Hawaii. 

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.  
