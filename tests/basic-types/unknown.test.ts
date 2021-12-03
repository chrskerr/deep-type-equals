
import deepTypeEquals, { unknown } from "../../src";

test( "string", () => {
	const result = deepTypeEquals<unknown>( unknown(), "string to test" );
	expect( result ).toBe( true );
});

test( "array", () => {
	const result = deepTypeEquals<unknown>( unknown(), [ "string to test" ]);
	expect( result ).toBe( true );
});

test( "object", () => {
	const result = deepTypeEquals<unknown>( unknown(), { key: "string to test" });
	expect( result ).toBe( true );
});
