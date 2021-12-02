
import deepTypeEquals from "../../src";

test( "string", () => {
	const result = deepTypeEquals<number>( 3.14, "string to test" );
	expect( result ).toBe( false );
});

test( "number", () => {
	const result = deepTypeEquals<number>( 3.14, 24 );
	expect( result ).toBe( true );
});

test( "0", () => {
	const result = deepTypeEquals<number>( 3.14, 0 );
	expect( result ).toBe( true );
});

test( "false", () => {
	const result = deepTypeEquals<number>( 3.14, false );
	expect( result ).toBe( false );
});

test( "false against 0", () => {
	const result = deepTypeEquals<number>( 0, false );
	expect( result ).toBe( false );
});

test( "empty object", () => {
	const result = deepTypeEquals<number>( 3.14, {});
	expect( result ).toBe( false );
});

test( "object with key: string", () => {
	const result = deepTypeEquals<number>( 3.14, { test: "test" });
	expect( result ).toBe( false );
});

test( "undefined", () => {
	const result = deepTypeEquals<number>( 3.14, undefined );
	expect( result ).toBe( false );
});

test( "null", () => {
	const result = deepTypeEquals<number>( 3.14, null );
	expect( result ).toBe( false );
});

test( "NaN", () => {
	const result = deepTypeEquals<number>( 3.14, NaN );
	expect( result ).toBe( false );
});

test( "array of strings", () => {
	const result = deepTypeEquals<number>( 3.14, [ "test" ]);
	expect( result ).toBe( false );
});