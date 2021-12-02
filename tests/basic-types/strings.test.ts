
import deepTypeEquals from "../../src";

test( "string", () => {
	const result = deepTypeEquals<string>( "dummy string", "string to test" );
	expect( result ).toBe( true );
});

test( "empty string", () => {
	const result = deepTypeEquals<string>( "dummy string", "" );
	expect( result ).toBe( true );
});

test( "empty test string", () => {
	const result = deepTypeEquals<string>( "", "string to test" );
	expect( result ).toBe( true );
});

test( "number", () => {
	const result = deepTypeEquals<string>( "dummy string", 24 );
	expect( result ).toBe( false );
});

test( "false", () => {
	const result = deepTypeEquals<string>( "dummy string", false );
	expect( result ).toBe( false );
});

test( "false and empty test string", () => {
	const result = deepTypeEquals<string>( "", false );
	expect( result ).toBe( false );
});

test( "empty object", () => {
	const result = deepTypeEquals<string>( "dummy string", {});
	expect( result ).toBe( false );
});

test( "object with key: string", () => {
	const result = deepTypeEquals<string>( "dummy string", { test: "test" });
	expect( result ).toBe( false );
});

test( "undefined", () => {
	const result = deepTypeEquals<string>( "dummy string", undefined );
	expect( result ).toBe( false );
});

test( "null", () => {
	const result = deepTypeEquals<string>( "dummy string", null );
	expect( result ).toBe( false );
});

test( "NaN", () => {
	const result = deepTypeEquals<string>( "dummy string", NaN );
	expect( result ).toBe( false );
});

test( "array of strings", () => {
	const result = deepTypeEquals<string>( "dummy string", [ "test" ]);
	expect( result ).toBe( false );
});