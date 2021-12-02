"use strict";
const testObject = {
    one: '',
    two: 2,
    three: [
        {
            something: true,
            another: [true],
        },
    ],
};
const runtimeTest = {
    one: 'asdfasdf',
    two: 2163,
    three: [
        {
            something: false,
            another: [false, false, true],
        },
    ],
};
function deepTypeEquals(testInput, dataToTest) {
    let isTypeMatch = false;
    if (Array.isArray(testInput) && Array.isArray(dataToTest)) {
        isTypeMatch = !dataToTest.some((curr) => {
            return !deepTypeEquals(testInput[0], curr);
        });
    }
    else if (typeof testInput === 'object' && typeof dataToTest === 'object') {
        const testEntries = Object.entries(testInput);
        const typedDataToTest = dataToTest;
        isTypeMatch = !testEntries.some(([key, value]) => {
            return !deepTypeEquals(value, typedDataToTest[key]);
        });
    }
    else {
        isTypeMatch = typeof testInput === typeof dataToTest;
    }
    return isTypeMatch;
}
console.log(deepTypeEquals(testObject, runtimeTest));
//# sourceMappingURL=index.js.map