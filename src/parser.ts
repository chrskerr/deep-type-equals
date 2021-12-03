
import { parse } from "@typescript-eslint/parser";

interface Test {
	one: "string";
	two: "other" | ( string | number )[];
}

type ConsumeableInputs = 
	`interface ${ string } {${ string }}` |
	`type ${ string } = ${ string }`; 


export function createReference<T>( input: ConsumeableInputs ): T | null | void {
	console.log( parse( input ));

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

createReference<string>( "type New = string" );
createReference<Test>( `interface Test {
	one: "string";
	two: "other" | ( string | number )[];
}` );
