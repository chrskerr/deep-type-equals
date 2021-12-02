
import { deepTypeEquals  } from "../../src";

test( "string against string", () => {
	const result = deepTypeEquals<string>( "dummy string", "string to test" );
	expect( result ).toBe( true );
});

test( "string against number", () => {
	const result = deepTypeEquals<string>( "dummy string", 24 );
	expect( result ).toBe( false );
});

test( "string against false", () => {
	const result = deepTypeEquals<string>( "dummy string", false );
	expect( result ).toBe( false );
});

test( "string against empty object", () => {
	const result = deepTypeEquals<string>( "dummy string", {});
	expect( result ).toBe( false );
});

test( "string against object with key: string", () => {
	const result = deepTypeEquals<string>( "dummy string", { test: "test" });
	expect( result ).toBe( false );
});

test( "string against undefined", () => {
	const result = deepTypeEquals<string>( "dummy string", undefined );
	expect( result ).toBe( false );
});

test( "string against null", () => {
	const result = deepTypeEquals<string>( "dummy string", null );
	expect( result ).toBe( false );
});

test( "string against NaN", () => {
	const result = deepTypeEquals<string>( "dummy string", NaN );
	expect( result ).toBe( false );
});

test( "string against array of strings", () => {
	const result = deepTypeEquals<string>( "dummy string", [ "test" ]);
	expect( result ).toBe( false );
});