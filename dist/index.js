"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optional = exports.unknown = exports.literal = exports.union = exports.createDeepTypeEquals = void 0;
/**
 * Deeply checks if the input data type matches the reference.
 * @param reference an example of the type which should be tested
 * @param data the data to confirm if it conforms to the reference type
 * @returns boolean
 */
function deepTypeEquals(reference, data, options) {
    if (typeof reference === "function") {
        return reference(data);
    }
    else if (Array.isArray(reference) && Array.isArray(data)) {
        return !data.some((curr) => {
            return !deepTypeEquals(reference[0], curr);
        });
    }
    else if (typeof reference === "object" && typeof data === "object") {
        const typedData = data;
        const dataKeys = Object.keys(typedData);
        const testKeys = Object.keys(reference);
        if (!options?.allowUnspecifiedObjectKeys && dataKeys.some(key => !testKeys.includes(key)))
            return false;
        return !Object.entries(reference).some(([key, value]) => {
            return !deepTypeEquals(value, typedData[key]);
        });
    }
    else {
        if (Number.isNaN(reference) || Number.isNaN(data)) {
            return false;
        }
        else {
            return isBasicMatch(reference, data);
        }
    }
}
exports.default = deepTypeEquals;
/**
 * Returns a curried instance of deepTypeEquals
 * @param reference
 * @returns ( data ) => boolean;
 */
function createDeepTypeEquals(reference) {
    return (data, options) => deepTypeEquals(reference, data, options);
}
exports.createDeepTypeEquals = createDeepTypeEquals;
const isBasicMatch = (a, b) => {
    return typeof a === typeof b;
};
/**
 *
 * @param args each argument should be an example of the types that is correct under this union.
 * @returns boolean
 */
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
function optional(arg) {
    // @ts-ignore
    return (input) => {
        return input === undefined || deepTypeEquals(arg, input);
    };
}
exports.optional = optional;
//# sourceMappingURL=index.js.map