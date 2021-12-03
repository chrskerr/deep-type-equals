
import deepTypeEquals from "../src";

export default function testingWrapper<T>( referenceInput: T, dataToTest: unknown ): boolean {
	return deepTypeEquals<T>( referenceInput, dataToTest as T );
}

export { unknown, union, literal } from "../src";
