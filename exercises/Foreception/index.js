var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  

function foreception(arr, str) {
    var newArr = [];
    //add the first thing in the people array 
    //add a semi colon to the end of the name string
    //then 
    //for every letter in the alphabet string, add a string for each letter in the array
    //repeat for each name
    //then return the complete array
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + ":");
        for (var j = 0; j < str.length; j++) {
            newArr.push(str[j]);
        }
    }
    return newArr;
} 
console.log(foreception(people, alphabet));