export default function deepTypeEquals<T>( testInput: T, dataToTest: unknown ): boolean {
	let isTypeMatch = false;

	if ( Array.isArray( testInput ) && Array.isArray( dataToTest )) {
		isTypeMatch = !dataToTest.some(( curr ) => {
			return !deepTypeEquals( testInput[ 0 ], curr );
		});
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
			isTypeMatch = typeof testInput === typeof dataToTest;
		}
	}

	return isTypeMatch;
}