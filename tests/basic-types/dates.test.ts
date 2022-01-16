
import deepTypeEquals from "..";

test( "against string", () => {
	const result = deepTypeEquals<Date>( new Date(), "string to test" );
	expect( result ).toBe( false );
});

test( "against number", () => {
	const result = deepTypeEquals<Date>( new Date(), 24 );
	expect( result ).toBe( false );
});

test( "against false", () => {
	const result = deepTypeEquals<Date>( new Date(), false );
	expect( result ).toBe( false );
});

test( "against arrray", () => {
	const result = deepTypeEquals<Date>( new Date(), [ true ]);
	expect( result ).toBe( false );
});

test( "false against empty object", () => {
	const result = deepTypeEquals<Date>( new Date(), {});
	expect( result ).toBe( false );
});

test( "against date", () => {
	const result = deepTypeEquals<Date>( new Date(), new Date());
	expect( result ).toBe( true );
});
