// function addUp(num) {
//     let total = 0;
//     for (let i = 0; i <= num; i++) {
//         total += i;
//     }
//     console.log(total);
// }
// addUp(10);


// function filterArray(arr) {
//     return arr.filter(element => typeof element === "number")

// }

// console.log(filterArray([1, 2, "a", "b"]));

// function minMax(arr) {
//     const sortedArr = arr.sort((a, b) => a - b);
//     sortedArr.splice(1, sortedArr.length - 2);
//     return sortedArr;
// }

// console.log(minMax([1, 2, 3, 4, 5]));

// function doubleChar(str) {
//     let newString = "";
//     for (let i = 0; i < str.length; i++) {
//         newString = newString += (str[i] += str[i]);
//     }
//     return newString;
// }
// console.log(doubleChar("String"));

// function getAbsSum(arr) {
//     const absArr = arr.map(num => Math.abs(num));
//     let total = 0;
//     for(let i = 0; i < absArr.length; i++){
//       total = total += absArr[i];  
//     }
//     return total;
// }
// console.log(getAbsSum([2, -1, 4, 8, 10]));

// function countVowels(str) {
//     const vowels =["a", "e", "i", "o", "u"];
//     let vowelCount = 0;
//     for(let i = 0; i < str.length; i++){
//         for(let j = 0; j< vowels.length; j++){
//             if(str[i] === vowels[j]){
//                 vowelCount ++;
//             }
//         }
//     }
//     return vowelCount;
// }
// console.log(countVowels("Celebration"))

// function silenceTrump(str) {
//     let newStr = str.replace(/[aeiou]/ig, "");
//     return newStr;
// }
// console.log(silenceTrump("We're gonna build a wall!"));

// function formatNum(num) {
//     const stringNum = num.toString();
//     // let newNum = "";
//     for (let i = stringNum.length; i >= 0; i--) {
//         if(i % 3 === 0){
//         stringNum.replace(stringNum[i], "," + stringNum[i])
//         }
//     }
//     return stringNum
// }
// console.log(formatNum(100000));

function sortNumsAscending(arr) {
    if (arr === null) {
        return [];
    }
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr;
}
console.log(sortNumsAscending([]));