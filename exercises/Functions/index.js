function add(a, b) {
    return (a + b);
}
add(1, 3);

function highNum(a, b, c) {
    return Math.max(a, b, c);
}
console.log(highNum(3, 9, 4));

function evenOrOdd(a) {
    if (a % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(evenOrOdd(5));

function longWords(str) {
    if (str.length <= 20) {
        return (str + str);
    } else {
        return (str.substr(0, (str.length / 2)));
    }
}
console.log(longWords("thisisareallylonhgwordwowhowlong"));

function getMax(str) {
    var chars = {}, first = str.charAt(0);
    chars[first] = 1;
    var maxChar = first, maxCount =1;

    for (var i = 1; i < str.length; i++) {
        var char = str.charAt(i);
        if (chars[char]) {
            chars[char]++;
        } else {
            chars[char] = 1;
        } 
        if (chars[char] > maxCount) {
            maxChar = char;
            maxCount = chars[char];
        }
    }
return maxChar;
}
console.log(getMax("aaaabbbbbccdddddd"));