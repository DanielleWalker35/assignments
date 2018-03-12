function largest(arr) {
    var big = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > big) {
            big = arr[i];
    }
}
return big;
}

console.log(largest([4,6,2,9,6,2,1]));

function lettersWithStrings (arr, x) {
    var includesChar = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(x) !== -1) {
        includesChar.push(arr[i]);
        }
    } 
    return includesChar;   
}
console.log(lettersWithStrings(["who", "why", "tell", "don't"], "w"));

function isDivisible(x, y){
    if (x % y === 0) {
        return "yup I divide!";
    } else {
        return "nope not divisible";
    }
}
console.log(isDivisible(5, 4));