export default function deepTypeEquals<T>( referenceInput: T, dataToTest: unknown ): boolean {
	let isTypeMatch = false;
	
	if ( typeof referenceInput === "function" ) {
		isTypeMatch = referenceInput( dataToTest );
	}
	else if ( Array.isArray( referenceInput )) {
		if ( Array.isArray( dataToTest )) {
			isTypeMatch = !dataToTest.some(( curr ) => {
				return !deepTypeEquals( referenceInput[ 0 ], curr );
			});
		}
	} else if ( typeof referenceInput === "object" && typeof dataToTest === "object" ) {
		const testEntries = Object.entries( referenceInput );
		const typedDataToTest = dataToTest as Record<string, unknown>;

		isTypeMatch = !testEntries.some(([ key, value ]) => {
			return !deepTypeEquals( value, typedDataToTest[ key ]);
		});
	} else {
		if ( Number.isNaN( referenceInput ) || Number.isNaN( dataToTest )) {
			isTypeMatch = false; 
		} else {
			isTypeMatch = isBasicMatch( referenceInput, dataToTest );
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