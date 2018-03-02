if(5>3){
    console.log("is greater than");
}

var cat = "cat"
if(cat.length === 3) {
    console.log("is the length");
}

var dog = "dog"
if(cat === dog) {
    console.log(true);
} else {
    console.log("not the same");
}

var person = {
    name: "Bobby",
    age:12
}
if(person.name.length >= 1 && person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie");
} else if(person.name.length >= 1 && person.age <= 17) {
    console.log(person.name + " is not allowed to go to the movie");
}

if(person.name.charAt(0)==="B") {
    console.log(person.name + " is allowed to go to the movie");
}

if(person.name.charAt(0) === "B" && person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
} else if(person.name.charAt(0) === "B" && person.age <= 17) {
    console.log(person.name + " is not allowed to go to the movie");
}

if(1 === "1") {
    console.log("strict");
} else if(1 == "1") {
    console.log("loose" || "abstract");
} else {
    console.log("not equal at all");
}

if(1 <= 2 || 2 === 4) {
    console.log("yes");
}