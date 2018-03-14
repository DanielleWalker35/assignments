var assertEqual = function (actual, expected) {
    if (actual !== expected) {
        throw {
            type: "fail",
            details: {
                actual: actual,
                expected: expected,
                msg: "expected " + actual + " to equal " + expected
            }
        };
    } else {
        console.log("succuess!", {
            type: "Succuess",
            details: {
                actual: actual,
                expected: expected
            }
        });
    }
}

function describe(message, testFunction) {
    console.log("test being run: " + message);
    try {
        testFunction();
    } catch (err) {
        console.log(err);
    }
}
// console.log(assertEqual(true, true));

function sum(x, y) {
    return x + y;
}
describe("Sum function", function () {
    assertEqual(sum(5, 5), 10);
});