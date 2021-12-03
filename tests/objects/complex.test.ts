
import deepTypeEquals from "../";

test( "nested 1", () => {
	type Type = {
		key: string,
		second: number,
		third: {
			key: number,
			second: boolean,
		},
	}

	const reference = {
		key: "test",
		second: 123,
		third: {
			key: 456,
			second: false,
		},
	};

	const testData = { 
		key: "something", 
		second: 987, 
		third: {
			key: 654,
			second: false,
		},
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( true );
});

test( "nested 2", () => {
	type Type = {
		key: string,
		second: number,
		third: {
			key: number,
			second: boolean,
		},
	}

	const reference = {
		key: "test",
		second: 123,
		third: {
			key: 456,
			second: false,
		},
	};

	const testData = { 
		key: "something", 
		second: 987, 
		third: {
			key: 654,
			second: "false",
		},
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( false );
});

test( "nested 3", () => {
	type Type = {
		key: string,
		second: number,
		third: {
			key: number,
			second: boolean,
		},
	}

	const reference = {
		key: "test",
		second: 123,
		third: {
			key: 456,
			second: false,
		},
	};

	const testData = { 
		key: "something", 
		second: 987, 
		third: {},
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( false );
});

test( "nested array 1", () => {
	type Type = {
		key: string,
		second: number,
		third: {
			key: number,
			second: boolean,
		}[],
	}

	const reference = {
		key: "test",
		second: 123,
		third: [
			{
				key: 456,
				second: false,
			},
		],
	};

	const testData = { 
		key: "something", 
		second: 987, 
		third:[
			{
				key: 765,
				second: true,
			},
			{
				key: 654,
				second: true,
			},
			{
				key: 432,
				second: true,
			},
		],
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( true );
});

test( "nested array 2", () => {
	type Type = {
		key: string,
		second: number,
		third: {
			key: number,
			second: boolean,
		}[],
	}

	const reference = {
		key: "test",
		second: 123,
		third: [
			{
				key: 456,
				second: false,
			},
		],
	};

	const testData = { 
		key: "something", 
		second: 987, 
		third:[
			{
				key: 765,
				second: true,
			},
			{
				key: "654",
				second: true,
			},
			{
				key: 432,
				second: true,
			},
		],
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( false );
});

test( "nested array 3", () => {
	type Type = {
		key: string,
		second: number,
		third: {
			key: number,
			second: boolean,
		}[],
	}

	const reference = {
		key: "test",
		second: 123,
		third: [
			{
				key: 456,
				second: false,
			},
		],
	};

	const testData = { 
		key: "something", 
		second: 987, 
		third:[
			{
				key: 765,
				second: true,
			},
			{
				key: 654,
				third: true,
			},
			{
				key: 432,
				second: true,
			},
		],
	};

	const result = deepTypeEquals<Type>( reference,  testData );
	expect( result ).toBe( false );
});

