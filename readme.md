# Deep Type Equality

This package is a helper to perform runtime typechecking for TS projects.

## Examples

```bash
npm i deep-type-equals
yarn add deep-type-equals
```

```tsx
import deepTypeEquals, { union } from "deep-type-equals";
```

### Basic Types

```tsx
deepTypeEquals<string>( "test string", "string to test" ); // true
deepTypeEquals<string>( "test string", 12 ); //false

deepTypeEquals<number>( 123, 456 ); // true
deepTypeEquals<number>( 123, "456" ); // false

deepTypeEquals<boolean>( true, false ); // true
deepTypeEquals<boolean>( true, true ); // true
deepTypeEquals<boolean>( true, "true" ); //false
```

### Arrays

```tsx
deepTypeEquals<string[]>([ "test string" ], [ "input" ]); // true
deepTypeEquals<string[]>([ "test string" ], "input" ); // false
```

### Union Types

```tsx
 type TestUnion = string | number;
 const testCase = union<TestUnion>( "test string", 123 );

 deepTypeEquals<TestUnion>( testCase, "string to test" ); // true;
 deepTypeEquals<TestUnion>( testCase, true ); // false;
```

```tsx
 type TestUnion = string | number;
 const testCase = union<TestUnion>( "test string", 123 );

 const isEqual = deepTypeEquals<TestUnion[]>([ testCase ], [ "string to test" ]); // true;
 const isEqual = deepTypeEquals<TestUnion[]>([ testCase ], [ "string to test", 243 ]); // true;
 const isEqual = deepTypeEquals<TestUnion[]>([ testCase ], "string to test" ); // false;
```

## To do

- Add `unknown` / `any` type checker function
- Add `function` type checker function
- Add tests and docs for object / record types (these should work, but are untested)
