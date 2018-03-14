function helperCallbForFilt (strInp) {
    var countC = 0;
    var countO = 0;
    var countE = 0;
    for (var i = 0; i < strInp.length; i++) {
        if (strInp[i] === "c") {
            countC++;
        } else if (strInp[i] === "o") {
            countO++;
        } else if (strInp[i] === "e") {
            countE++;
        }
    }
    if ((countC + countE + countO) % 3 === 0) {
        return (countC + countE + countO) / 3;
    }
 }

 module.exports = helperCallbForFilt;