# Deep Type Equals

This package is a helper to perform runtime typechecking for TS projects.

Probably can't be imported yet. Package.json is likely wrong.

## Usage

You should pecify the idealObject type in either of the following methods to ensure that the idealObject always matches the type it is checking against.

### Using a typed example object

```ts
interface IExample {
 id: number,
 value: string,
}

const reference: IExample = {
 id: 1,
 value: "value",
}

const result: boolean = deepTypeEquals(reference, input);
```

### Using a type parameters

```ts
interface IExample {
 id: number,
 value: string,
}

const reference = {
 id: 1,
 value: "value",
}

const result: boolean = deepTypeEquals<IExample>(reference, input);
```

### Set Up

```bash
npm i deep-type-equals
yarn add deep-type-equals
```

```ts
import deepTypeEquals, { union } from "deep-type-equals";
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

## To do

- Add `unknown` / `any` type checker function
- Add `function` type checker function
- Add tests and docs for object / record types (these should work, but are untested)
