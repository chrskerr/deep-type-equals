
import deepTypeEquals from "../";

test( "string", () => {
	const result = deepTypeEquals<string[]>([ "dummy" ], "string to test" );
	expect( result ).toBe( false );
});

test( "string string[]", () => {
	const result = deepTypeEquals<string[]>([ "dummy" ], [ "string to test", "string 2", "string 3" ]);
	expect( result ).toBe( true );
});

test( "string mixed[] 1", () => {
	const result = deepTypeEquals<string[]>([ "dummy" ], [ "string to test", false, "string 3" ]);
	expect( result ).toBe( false );
});

test( "string mixed[] 2", () => {
	const result = deepTypeEquals<string[]>([ "dummy" ], [ 25, "string 2", "string 3" ]);
	expect( result ).toBe( false );
});

test( "string mixed[] 2", () => {
	const result = deepTypeEquals<string[]>([ "dummy" ], [ "string to test", {}, [ "string 3" ]]);
	expect( result ).toBe( false );
});

test( "number", () => {
	const result = deepTypeEquals<number[]>([ 23 ], 35 );
	expect( result ).toBe( false );
});

test( "number number[]", () => {
	const result = deepTypeEquals<number[]>([ 564 ], [ 124, 15, 152 ]);
	expect( result ).toBe( true );
});

test( "number mixed[] 1", () => {
	const result = deepTypeEquals<number[]>([ 564 ], [ 124, "15", 152 ]);
	expect( result ).toBe( false );
});

test( "number mixed[] 2", () => {
	const result = deepTypeEquals<number[]>([ 564 ], [ true, 15, 152 ]);
	expect( result ).toBe( false );
});

test( "number mixed[] 3", () => {
	const result = deepTypeEquals<number[]>([ 564 ], [ 124, 15, { test:152 }]);
	expect( result ).toBe( false );
});

test( "true", () => {
	const result = deepTypeEquals<boolean[]>([ true ], true );
	expect( result ).toBe( false );
});

test( "true[]", () => {
	const result = deepTypeEquals<boolean[]>([  true ], [ true, false, true ]);
	expect( result ).toBe( true );
});

test( "false", () => {
	const result = deepTypeEquals<boolean[]>([ false ], false );
	expect( result ).toBe( false );
});

test( "false[]", () => {
	const result = deepTypeEquals<boolean[]>([ false ], [ true, false, true ]);
	expect( result ).toBe( true );
});

test( "false mixed[] 1", () => {
	const result = deepTypeEquals<boolean[]>([ false ], [ true, false, "true" ]);
	expect( result ).toBe( false );
});

test( "false mixed[] 2", () => {
	const result = deepTypeEquals<boolean[]>([ false ], [ true, 3525, true ]);
	expect( result ).toBe( false );
});

test( "false mixed[] 3", () => {
	const result = deepTypeEquals<boolean[]>([ false ], [[ true ], false, true ]);
	expect( result ).toBe( false );
});
