function printLetter(str) {
    var letter = "";
    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        console.log(letter);
    }
}
printLetter("Danielle");

function firstOccur(str, a) {
    for (var i = 0; i < str.length; i++) {
        if (i === a) {
            return str.indexOf(i);
        } else if (str.indexOf(i) < 0) {
            return "character not found";
        }
    }
}
console.log(firstOccur("who is the greatest", "z"));


function fortyTwo(arr) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === 42){
            console.log("i is " + i);
            return "42 I need to quit";
        }
    }
    return "42 is not found";
}

console.log(fortyTwo([1,2,3,42,5,67,3,78,3,2]));


function smallestNum([a,b,c,d,e,f,g,h,i,j]) {
    var arr = [a,b,c,d,e,f,g,h,i,j];
        var smallest = arr[0];
    for (var i = 0; i< arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }  
}
return smallest;
}

console.log(smallestNum([8,7,9,15,3,99,2,7,44,5]));