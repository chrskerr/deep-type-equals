
import { createDeepTypeEquals, realCreateDeepTypeEquals } from "../";

type ExtraKeysType = {
	key: string,
	second: number,
	third: boolean,
}

const extraKeysReference = {
	key: "test",
	second: 123,
	third: false,
};

const extraKeysTest = createDeepTypeEquals<ExtraKeysType>( extraKeysReference );
const realExtraKeysTest = realCreateDeepTypeEquals<ExtraKeysType>( extraKeysReference );

test( "extra keys 1", () => {
	const result = extraKeysTest({ key: "something", second: 123, third: true, fourth: "something" }, { allowUnspecifiedObjectKeys: true });
	expect( result ).toBe( true );
});


test( "extra keys 2", () => {
	const result = extraKeysTest({ key: "something", second: 123, third: true, fourth: "something" });
	expect( result ).toBe( false );
});

test( "types on extra keys 1", () => {
	const result = realExtraKeysTest({ key: "something", second: 123, third: true }, { allowUnspecifiedObjectKeys: true });
	expect( result ).toBe( true );
});


test( "types on extra keys 2", () => {
	const result = realExtraKeysTest({ key: "something", second: 123, third: true });
	expect( result ).toBe( true );
});
