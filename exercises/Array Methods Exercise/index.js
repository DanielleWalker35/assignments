var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

vegetables.pop();

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables); 

fruit.splice(0, 1);

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

var indexOrange = fruit.indexOf("orange")

console.log(indexOrange);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables); 

fruit.push(indexOrange);

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables); 

var vegLength = vegetables.length;

console.log(vegLength);

vegetables.push(vegLength);

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables); 

var food = fruit.concat(vegetables);

console.log(food);

food.splice(4, 2);

console.log(food);

food.reverse();

console.log(food);

console.log(food.join());