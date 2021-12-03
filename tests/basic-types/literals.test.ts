
import deepTypeEquals, { union, literal } from "../";

test( "simple string 1", () => {
	type Type = "one";
	const reference = literal<Type>( "one" );

	const result = deepTypeEquals<Type>( reference, "one" );
	expect( result ).toBe( true );
});

test( "simple string 2", () => {
	type Type = "one" | "two";
	const reference = union<Type>( literal( "one" ), literal( "two" ));

	const result = deepTypeEquals<Type>( reference, "two" );
	expect( result ).toBe( true );
});

test( "simple string 3", () => {
	type Type = "one" | "two";
	const reference = union<Type>( literal( "one" ), literal( "two" ));

	const result = deepTypeEquals<Type>( reference, "three" );
	expect( result ).toBe( false );
});

test( "mixed 1", () => {
	type Type = "one" | 152 | false;
	const reference = union<Type>( literal( "one" ), literal( 152 ), literal( false ));

	const result = deepTypeEquals<Type>( reference, "one" );
	expect( result ).toBe( true );
});

test( "mixed 2", () => {
	type Type = "one" | 152 | false;
	const reference = union<Type>( literal( "one" ), literal( 152 ), literal( false ));

	const result = deepTypeEquals<Type>( reference, 152 );
	expect( result ).toBe( true );
});

test( "mixed 3", () => {
	type Type = "one" | 152 | false;
	const reference = union<Type>( literal( "one" ), literal( 152 ), literal( false ));

	const result = deepTypeEquals<Type>( reference, false );
	expect( result ).toBe( true );
});

test( "mixed 4", () => {
	type Type = "one" | 152 | false;
	const reference = union<Type>( literal( "one" ), literal( 152 ), literal( false ));

	const result = deepTypeEquals<Type>( reference, [ "three" ]);
	expect( result ).toBe( false );
});

test( "mixed 5", () => {
	type Type = "one" | 152 | false;
	const reference = union<Type>( literal( "one" ), literal( 152 ), literal( false ));

	const result = deepTypeEquals<Type>( reference,  151 );
	expect( result ).toBe( false );
});

test( "mixed 6", () => {
	type Type = "one" | 152 | false;
	const reference = union<Type>( literal( "one" ), literal( 152 ), literal( false ));

	const result = deepTypeEquals<Type>( reference, true );
	expect( result ).toBe( false );
});
