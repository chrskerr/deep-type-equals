"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknown = exports.literal = exports.union = void 0;
const parser_1 = require("@typescript-eslint/parser");
function deepTypeEquals(referenceInput, dataToTest) {
    let isTypeMatch = false;
    if (typeof referenceInput === "function") {
        isTypeMatch = referenceInput(dataToTest);
    }
    else if (Array.isArray(referenceInput)) {
        if (Array.isArray(dataToTest)) {
            isTypeMatch = !dataToTest.some((curr) => {
                return !deepTypeEquals(referenceInput[0], curr);
            });
        }
    }
    else if (typeof referenceInput === "object" && typeof dataToTest === "object") {
        const testEntries = Object.entries(referenceInput);
        const typedDataToTest = dataToTest;
        const dataEntries = Object.entries(typedDataToTest);
        if (testEntries.length !== dataEntries.length) {
            isTypeMatch = false;
        }
        else {
            isTypeMatch = !testEntries.some(([key, value]) => {
                return !deepTypeEquals(value, typedDataToTest[key]);
            });
        }
    }
    else {
        if (Number.isNaN(referenceInput) || Number.isNaN(dataToTest)) {
            isTypeMatch = false;
        }
        else {
            isTypeMatch = isBasicMatch(referenceInput, dataToTest);
        }
    }
    return isTypeMatch;
}
exports.default = deepTypeEquals;
const isBasicMatch = (a, b) => {
    return typeof a === typeof b;
};
function union(...args) {
    // @ts-ignore
    return (input) => {
        return args.some(arg => deepTypeEquals(arg, input));
    };
}
exports.union = union;
function literal(arg) {
    // @ts-ignore
    return (input) => {
        return arg === input;
    };
}
exports.literal = literal;
function unknown() {
    // @ts-ignore
    return () => true;
}
exports.unknown = unknown;
function createReference(input) {
    console.log((0, parser_1.parse)(input));
    // let reference: T;
    // if ( input.startsWith( "{" )) {
    // 	if ( !input.endsWith( "}" )) return null;
    // 	const cleanedInput = input.replace( /^{/, "" ).replace( /}$/, "" ).split( /[;,\n]/ ).filter( Boolean );
    // 	const entries = Object.entries( cleanedInput );
    // 	console.log( entries );
    // } else {
    // 	const values = input.split( "|" ).map( input => {
    // 		if ( input.endsWith( "[]" )) {
    // 		}
    // 	});
    // }
    // return reference;
}
createReference("string");
createReference("type New = string");
createReference(`interface Test {
	one: "string";
	two: "other" | ( string | number )[];
}`);
//# sourceMappingURL=index.js.map