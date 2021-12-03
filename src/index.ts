export default function deepTypeEquals<T>( testInput: T, dataToTest: unknown ): boolean {
	let isTypeMatch = false;
	
	if ( typeof testInput === "function" ) {
		isTypeMatch = testInput( dataToTest );
	}
	else if ( Array.isArray( testInput )) {
		if ( Array.isArray( dataToTest )) {
			isTypeMatch = !dataToTest.some(( curr ) => {
				return !deepTypeEquals( testInput[ 0 ], curr );
			});
		}
	} else if ( typeof testInput === "object" && typeof dataToTest === "object" ) {
		const testEntries = Object.entries( testInput );
		const typedDataToTest = dataToTest as Record<string, unknown>;

		isTypeMatch = !testEntries.some(([ key, value ]) => {
			return !deepTypeEquals( value, typedDataToTest[ key ]);
		});
	} else {
		if ( Number.isNaN( testInput ) || Number.isNaN( dataToTest )) {
			isTypeMatch = false; 
		} else {
			isTypeMatch = isBasicMatch( testInput, dataToTest );
		}
	}

	return isTypeMatch;
}

const isBasicMatch = ( a: unknown, b: unknown ): boolean => {
	return a === b || typeof a === typeof b;
};

export function union<T>( ...args: T[]): T {
	// @ts-ignore
	return ( input: unknown ) => {
		return args.some( arg => isBasicMatch( arg, input ));
	};
}