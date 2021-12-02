
import { deepTypeEquals  } from "../../src";

test( "number against string", () => {
	const result = deepTypeEquals<number>( 3.14, "string to test" );
	expect( result ).toBe( false );
});

test( "number against number", () => {
	const result = deepTypeEquals<number>( 3.14, 24 );
	expect( result ).toBe( true );
});

test( "number against false", () => {
	const result = deepTypeEquals<number>( 3.14, false );
	expect( result ).toBe( false );
});

test( "number against empty object", () => {
	const result = deepTypeEquals<number>( 3.14, {});
	expect( result ).toBe( false );
});

test( "number against object with key: string", () => {
	const result = deepTypeEquals<number>( 3.14, { test: "test" });
	expect( result ).toBe( false );
});

test( "number against undefined", () => {
	const result = deepTypeEquals<number>( 3.14, undefined );
	expect( result ).toBe( false );
});

test( "number against null", () => {
	const result = deepTypeEquals<number>( 3.14, null );
	expect( result ).toBe( false );
});

test( "number against NaN", () => {
	const result = deepTypeEquals<number>( 3.14, NaN );
	expect( result ).toBe( false );
});

test( "number against array of strings", () => {
	const result = deepTypeEquals<number>( 3.14, [ "test" ]);
	expect( result ).toBe( false );
});