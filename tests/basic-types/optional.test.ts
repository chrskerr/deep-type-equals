
import { optional, createDeepTypeEquals } from "../";

type MyType = {
	key: string,
	two?: number,
	three?: boolean,
}

const reference = { 
	key: "123",
	two: optional( 123 ),
	three: optional( false ),
};

const myTest = createDeepTypeEquals<MyType>( reference );

test( "optional 1", () => {
	const result = myTest({ key: "something", two: 1666, three: true });
	expect( result ).toBe( true );
});

test( "optional 2", () => {
	const result = myTest({ key: "something", three: true });
	expect( result ).toBe( true );
});

test( "optional 3", () => {
	const result = myTest({ key: "something" });
	expect( result ).toBe( true );
});

test( "optional 4", () => {
	const result = myTest({ two: 1244 });
	expect( result ).toBe( false );
});

test( "optional 5", () => {
	const result = myTest({ key: "something", two: "1666", three: true });
	expect( result ).toBe( false );
});

test( "optional 6", () => {
	const result = myTest({ key: "something", four: "1666", three: true }, { allowUnspecifiedObjectKeys: true });
	expect( result ).toBe( true );
});

test( "optional 7", () => {
	const result = myTest({ key: "something", two: "1666", three: true, four: "salks" }, { allowUnspecifiedObjectKeys: true });
	expect( result ).toBe( false );
});
