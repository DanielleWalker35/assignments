//these are the form and input elements
//we can ask them questions such as what is your current value, are you checked, are you selected, etc.
var nameInput = document.login.firstName;
var lastInput = document.login.lastName;
var ageInput = document.login.age;
var form = document.login;
var vegetarianBox = document.login.vegetarian;
var kosherBox = document.login.kosher;
var glutenFreeBox = document.login.glutenFree;
var genderMale = document.getElementById("genderM");
var genderFemale = document.getElementById("genderF");
var locationChoice = document.login.location;
//this is an object to store user input data
//we define it in terms of what is meaningful to us
var data = {
    firstName: "",
    lastName: "",
    age: "",
    dietRestrictions:[],
    genderSel: "",
}

function setDiet(event) {
//user clicks on checkbox
//if it is checked add to array
// console.log(event.target.name)
if(event.target.checked){
    data.dietRestrictions.push(event.target.name);
} else {
    var index = data.dietRestrictions.indexOf(even.target.name)
    data.dietRestrictions.splice(index, 1);
}
//if not checked remove from the array
// console.log(data.dietRestrictions);
}

vegetarianBox.addEventListener("change", setDiet)
kosherBox.addEventListener("change", setDiet)
glutenFreeBox.addEventListener("change", setDiet)
genderMale.addEventListener("change", pickGender);
genderFemale.addEventListener("change", pickGender);

//these eventlisteners track the data as the user is inputting it and add the data to the appropriate part of the data object.
nameInput.addEventListener("input", function (event) {
    data.firstName = event.target.value;
    // console.log(data);
});

lastInput.addEventListener("input", function (event) {
    data.lastName = event.target.value;
    // console.log(data);
});

ageInput.addEventListener("input", function (event) {
    data.age = event.target.valueAsNumber;
    // console.log(data);
});
locationChoice.addEventListener("change", function(event) {
    data.locationChoice = event.target.value;
})


function pickGender (event) {
    // console.log(event.target.name)
        data.genderSel = event.target.name;
    }
    // console.log(data.genderSel);


//send off the information now that it has been collected
form.addEventListener("submit", function(){
    alert("First Name: " + data.firstName + "\n" + "Last  Name: " + data.lastName + "\n" + "Age: " + data.age + "\n" + "Diet Restrictions: " + data.dietRestrictions.join(", ") + "\n" + "Gender: " + data.genderSel + "\n" + "Location: " + data.locationChoice + "\n") 
});

