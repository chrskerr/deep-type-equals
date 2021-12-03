# Deep Type Equals

![gzip size badge](https://img.badgesize.io/chrskerr/deep-type-equals/master/dist/index.js?compression=gzip)
![Jest](https://github.com/chrskerr/deep-type-equals/actions/workflows/tests.yml/badge.svg?event=push)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![NPM Version](https://img.shields.io/npm/v/deep-type-equals)](https://www.npmjs.com/package/deep-type-equals)

## Purpose

This package is a zero dependency helper design to perform deep type equality checks at runtime.

It uses your existing types plus a typed reference object to confirm if input data matches the intended type.

## Usage

You should pecify the idealObject type in either of the following methods to ensure that the idealObject always matches the type it is checking against.

Works on simple types, literals, unions, arrays, objects and unknown.

### Using a typed example object

```ts
type IExample = {
 id: number,
 value: string,
}

const reference: IExample = {
 id: 1,
 value: "value",
}

const result: boolean = deepTypeEquals(reference, input); // true or false
```

### Using a type parameters

```ts
type IExample = {
 id: number,
 value: string,
}

const reference = {
 id: 1,
 value: "value",
}

const result: boolean = deepTypeEquals<IExample>(reference, input); // true or false
```

### Set Up

```bash
npm i deep-type-equals
yarn add deep-type-equals
```

```ts
import deepTypeEquals, { union, unknown } from "deep-type-equals";
```

### Basic Types

```ts
deepTypeEquals<string>( "test string", "string to test" ); // true
deepTypeEquals<string>( "test string", 12 ); //false

deepTypeEquals<number>( 123, 456 ); // true
deepTypeEquals<number>( 123, "456" ); // false

deepTypeEquals<boolean>( true, false ); // true
deepTypeEquals<boolean>( true, true ); // true
deepTypeEquals<boolean>( true, "true" ); //false
```

### Arrays

```ts
deepTypeEquals<string[]>([ "test string" ], [ "input" ]); // true
deepTypeEquals<string[]>([ "test string" ], "input" ); // false
```

### Objects

These will fail on extra keys, missing keys, and deeply checked mismatched types.

```ts
deepTypeEquals<{ key: string }>({ key: "test string" }, { key: "input" }); // true
deepTypeEquals<{ key: string }>({ key: "test string" }, "input" ); // false
```

### Union Types

```ts
 type TestUnion = string | number;
 const reference = union<TestUnion>( "test string", 123 );

 deepTypeEquals<TestUnion>( reference, "string to test" ); // true;
 deepTypeEquals<TestUnion>( reference, true ); // false;
```

```ts
 type TestUnion = string | number;
 const reference = [ union<TestUnion>( "test string", 123 )];

 deepTypeEquals<TestUnion[]>( reference, [ "string to test" ]); // true;
 deepTypeEquals<TestUnion[]>( reference, [ "string to test", 243 ]); // true;
 deepTypeEquals<TestUnion[]>( reference, "string to test" ); // false;
```

### Literals

```ts
deepTypeEquals( literal( "reference" ), "reference" ); // true
deepTypeEquals( literal( "reference" ), "other" ); // false
```

```ts
type Modes = "fast" | "slow";
const reference = union<Modes>( literal( "fast" ), literal( "slow" ));

deepTypeEquals( reference, "fast" ); // true
deepTypeEquals( reference, "slow" ); // true
deepTypeEquals( reference, "something else" ); // false
```

### Unknown Types

```ts
 deepTypeEquals<TestUnion[]>( unknown(), [ "string to test" ]); // true;
 deepTypeEquals<TestUnion[]>( unknown(), "string to test" ); // true;
 deepTypeEquals<TestUnion[]>( unknown(), 123 ); // true;
```

## Gaps

- No way to test if a value is a function yet.
- No way to ensure that you provide a reference for all possible union values.

## Bugs, Feedback & Contributions

I'd be glad to hear from you! So please provide any through issues, discussions or as a pull request above 😃
