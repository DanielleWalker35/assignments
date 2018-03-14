// function sum(x, y){  
//   //check data types first and throw error
//   if(typeof x !== "number" || typeof y !== "number"){
//     throw "Input must be a number";
//   }
//   return x + y;
// }

// try {
//   sum("1","2");
// } catch(err){
//   console.log(err);
// };
var user = {username: "Mam", password: "223abc"};
// var user = {username: "sam", password: "123abc"};  
function login(username, password){  
  //check credentials
  if (user.username === "sam" && user.password === "123abc") {
    console.log("login successful!");
  } else {
    throw "those don't match, try again";
  }
}
// login(user);

try {
  login(user);
} catch(err){
console.log(err);
}