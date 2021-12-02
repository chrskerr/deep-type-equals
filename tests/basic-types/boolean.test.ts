
import { deepTypeEquals  } from "../../src";

test( "false against string", () => {
	const result = deepTypeEquals<boolean>( false, "string to test" );
	expect( result ).toBe( false );
});

test( "false against number", () => {
	const result = deepTypeEquals<boolean>( false, 24 );
	expect( result ).toBe( false );
});

test( "false against false", () => {
	const result = deepTypeEquals<boolean>( false, false );
	expect( result ).toBe( true );
});

test( "false against true", () => {
	const result = deepTypeEquals<boolean>( false, true );
	expect( result ).toBe( true );
});

test( "false against empty object", () => {
	const result = deepTypeEquals<boolean>( false, {});
	expect( result ).toBe( false );
});

test( "false against object with key: string", () => {
	const result = deepTypeEquals<boolean>( false, { test: "test" });
	expect( result ).toBe( false );
});

test( "false against undefined", () => {
	const result = deepTypeEquals<boolean>( false, undefined );
	expect( result ).toBe( false );
});

test( "false against null", () => {
	const result = deepTypeEquals<boolean>( false, null );
	expect( result ).toBe( false );
});

test( "false against NaN", () => {
	const result = deepTypeEquals<boolean>( false, NaN );
	expect( result ).toBe( false );
});

test( "false against array of strings", () => {
	const result = deepTypeEquals<boolean>( false, [ "test" ]);
	expect( result ).toBe( false );
});



test( "true against string", () => {
	const result = deepTypeEquals<boolean>( true, "string to test" );
	expect( result ).toBe( false );
});

test( "true against number", () => {
	const result = deepTypeEquals<boolean>( true, 24 );
	expect( result ).toBe( false );
});

test( "true against false", () => {
	const result = deepTypeEquals<boolean>( true, false );
	expect( result ).toBe( true );
});

test( "true against true", () => {
	const result = deepTypeEquals<boolean>( true, true );
	expect( result ).toBe( true );
});

test( "true against empty object", () => {
	const result = deepTypeEquals<boolean>( true, {});
	expect( result ).toBe( false );
});

test( "true against object with key: string", () => {
	const result = deepTypeEquals<boolean>( true, { test: "test" });
	expect( result ).toBe( false );
});

test( "true against undefined", () => {
	const result = deepTypeEquals<boolean>( true, undefined );
	expect( result ).toBe( false );
});

test( "true against null", () => {
	const result = deepTypeEquals<boolean>( true, null );
	expect( result ).toBe( false );
});

test( "true against NaN", () => {
	const result = deepTypeEquals<boolean>( true, NaN );
	expect( result ).toBe( false );
});

test( "true against array of strings", () => {
	const result = deepTypeEquals<boolean>( true, [ "test" ]);
	expect( result ).toBe( false );
});