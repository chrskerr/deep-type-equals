
type SameAs<T> = T;

export interface IDeepTypeEqualsOptions {
	allowUnspecifiedObjectKeys?: boolean,
}

/**
 * Deeply checks if the input data type matches the reference.
 * @param reference an example of the type which should be tested
 * @param data the data to confirm if it conforms to the reference type
 * @returns boolean
 */
export default function deepTypeEquals<T>( 
	reference: T, 
	data: SameAs<T>,
	options?: IDeepTypeEqualsOptions,
): boolean {	
	if ( typeof reference === "function" ) {
		return reference( data );

	}

	else if ( reference instanceof Date ) {
		return data instanceof Date;
	}

	else if ( Array.isArray( reference ) && Array.isArray( data )) {
		return !data.some(( curr ) => {
			return !deepTypeEquals( reference[ 0 ], curr );

		});

	} else if ( typeof reference === "object" && typeof data === "object" ) {
		const typedData = data as Record<string, unknown>;
		
		const dataKeys = Object.keys( typedData );
		const testKeys = Object.keys( reference );

		if ( !options?.allowUnspecifiedObjectKeys && dataKeys.some( key => !testKeys.includes( key ))) return false;

		return !Object.entries( reference ).some(([ key, value ]) => {
			return !deepTypeEquals( value, typedData[ key ] as typeof value );
		});

	} else {
		if ( Number.isNaN( reference ) || Number.isNaN( data )) {
			return false; 

		} else {
			return isBasicMatch( reference, data );

		}
	}

}

/**
 * Returns a curried instance of deepTypeEquals 
 * @param reference 
 * @returns ( data ) => boolean;
 */
export function createDeepTypeEquals<T>( reference: T ) {
	return ( data: SameAs<T>, options?: IDeepTypeEqualsOptions ) => deepTypeEquals( reference, data, options );
}

const isBasicMatch = ( a: unknown, b: unknown ): boolean => {
	return typeof a === typeof b;
};

/**
 * 
 * @param args each argument should be an example of the types that is correct under this union.
 * @returns boolean
 */
export function union<T>( ...args: T[]): T {
	// @ts-ignore
	return ( input: T ) => {
		return args.some( arg => deepTypeEquals( arg, input ));
	};
}

export function literal<T>( arg: T ): T {
	// @ts-ignore
	return ( input: T ) => {
		return arg === input;
	};
}

export function unknown(): unknown {
	// @ts-ignore
	return () => true;
}

export function optional<T>( arg: T ): T | undefined {
	// @ts-ignore
	return ( input: T ) => {
		return input === undefined || deepTypeEquals( arg, input );
	};
}
