// let removeA = function(str) {
//     var newString = str.replace(/A/i, "");
//     return newString;
// }
// console.log(removeA("abqiolpAclkpaiojklA"));

let removeA = function (str) {
    var newString = str.toLowerCase("A");
    var finalString = newString.replace(/a/g, "");
    return finalString;
}
console.log(removeA("abqiolpAclkpaiojklA"));