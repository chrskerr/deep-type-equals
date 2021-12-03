
import deepTypeEquals from "../";

test( "single key", () => {
	interface Type {
		key: string,
	}

	const reference = {
		key: "test",
	};

	const result = deepTypeEquals<Type>( reference, { key: "something" });
	expect( result ).toBe( true );
});

test( "single key 2", () => {
	interface Type {
		key: string,
	}

	const reference = {
		key: "test",
	};

	const result = deepTypeEquals<Type>( reference, { key: 43 });
	expect( result ).toBe( false );
});

test( "mixed keys 1", () => {
	interface Type {
		key: string,
		second: number,
		third: boolean,
	}

	const reference = {
		key: "test",
		second: 123,
		third: false,
	};

	const result = deepTypeEquals<Type>( reference , { key: "something", second: 345, third: true  });
	expect( result ).toBe( true );
});

test( "mixed keys 2", () => {
	interface Type {
		key: string,
		second: number,
		third: boolean,
	}

	const reference = {
		key: "test",
		second: 123,
		third: false,
	};

	const result = deepTypeEquals<Type>( reference , { key: "something", second: 345, third: "true"  });
	expect( result ).toBe( false );
});

test( "mixed keys 3", () => {
	interface Type {
		key: string,
		second: number,
		third: boolean,
	}

	const reference = {
		key: "test",
		second: 123,
		third: false,
	};

	const result = deepTypeEquals<Type>( reference , { key: "something", third: true  });
	expect( result ).toBe( false );
});

test( "mixed keys 4", () => {
	interface Type {
		key: string,
		second: number,
		third: boolean,
	}

	const reference = {
		key: "test",
		second: 123,
		third: false,
	};

	const result = deepTypeEquals<Type>( reference , { key: "something", second: 123, third: true, fourth: "something" });
	expect( result ).toBe( false );
});
