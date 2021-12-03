
import deepTypeEquals, { union } from "..";

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

test( "array union 4", () => {
	type Union = string | number 

	const result = deepTypeEquals<Union[]>([ union<Union>( "string", 2512 ) ], [ "string to test", 245 ]);
	expect( result ).toBe( true );
});

test( "object union", () => {
	type Type = {
		key: string,
		second: number,
	} | {
		third: boolean,
		fourth: boolean,
	}

	const reference = union<Type>({ key: "string", second: 123 }, { third: true, fourth: false });

	const testData = { 
		key: "something", 
		second: 987, 
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( true );
});

test( "object union 2", () => {
	type Type = {
		key: string,
		second: number,
	} | {
		third: boolean,
		fourth: boolean,
	}

	const reference = union<Type>({ key: "string", second: 123 }, { third: true, fourth: false });

	const testData = { 
		third: true, 
		fourth: true, 
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( true );
});

test( "object union 3", () => {
	type Type = {
		key: string,
		second: number,
	} | {
		third: boolean,
		fourth: boolean,
	}

	const reference = union<Type>({ key: "string", second: 123 }, { third: true, fourth: false });

	const testData = { 
		third: true, 
		key: true, 
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( false );
});

test( "object union 4", () => {
	type Type = {
		key: string,
		second: number,
	} | {
		third: boolean,
		fourth: boolean,
	}

	const reference = union<Type>({ key: "string", second: 123 }, { third: true, fourth: false });

	const testData = { 
		key: true, 
		second: true, 
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( false );
});
