
import deepTypeEquals, { union } from "../../src";

test( "string | number 1", () => {
	type Union = string | number 

	const result = deepTypeEquals<Union>( union<Union>( "string", 2512 ), "string to test" );
	expect( result ).toBe( true );
});

test( "string | number 2", () => {
	type Union = string | number 

	const result = deepTypeEquals<Union>( union<Union>( "string", 2512 ), 2525 );
	expect( result ).toBe( true );
});

test( "string | number 3", () => {
	type Union = string | number 

	const result = deepTypeEquals<Union>( union<Union>( "string", 2512 ), false );
	expect( result ).toBe( false );
});

test( "string | number 4", () => {
	type Union = string | number 

	const result = deepTypeEquals<Union>( union<Union>( "string", 2512 ), [ 25 ]);
	expect( result ).toBe( false );
});

test( "array union 1", () => {
	type Union = string | number 

	const result = deepTypeEquals<Union[]>([ union<Union>( "string", 2512 ) ],[ "string to test" ]);
	expect( result ).toBe( true );
});

test( "array union 2", () => {
	type Union = string | number 

	const result = deepTypeEquals<Union[]>([ union<Union>( "string", 2512 ) ],[ true ]);
	expect( result ).toBe( false );
});

test( "array union 3", () => {
	type Union = string | number 

	const result = deepTypeEquals<Union[]>([ union<Union>( "string", 2512 ) ], "string to test" );
	expect( result ).toBe( false );
});


// test( "string", () => {
// 	const result = deepTypeEquals<string | number>([ "string", 2512 ], 152 );
// 	expect( result ).toBe( true );
// });


// test( "string", () => {
// 	const result = deepTypeEquals<string | number>([ "string", 2512 ], true );
// 	expect( result ).toBe( false );
// });

