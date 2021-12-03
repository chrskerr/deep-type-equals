
import deepTypeEquals, { createDeepTypeEquals as realCreateDeepTypeEquals, IDeepTypeEqualsOptions } from "../src";

export default function testingWrapper<T>( referenceInput: T, dataToTest: unknown ): boolean {
	return deepTypeEquals<T>( referenceInput, dataToTest as T );
}

export function createDeepTypeEquals<T>( reference: T ) {
	return ( data: unknown, options?: IDeepTypeEqualsOptions ) => realCreateDeepTypeEquals( reference )( data as T, options );
}

export { 
	unknown, union, 
	literal, optional, 
	createDeepTypeEquals as realCreateDeepTypeEquals, 
} from "../src";
