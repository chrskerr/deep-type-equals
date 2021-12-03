# Deep Type Equality

This package is a helper to perform runtime typechecking for TS projects.

## Examples

```bash
npm i deep-type-equals
yarn add deep-type-equals
```

```txs
import deepTypeEquals, { union } from "deep-type-equals"
```

### Basic Types

```txs
deepTypeEquals<string>( "test string", "string to test" ); // true
deepTypeEquals<string>( "test string", 12 ); //false

deepTypeEquals<number>( 123, 456 ); // true
deepTypeEquals<number>( 123, "456" ); // false

deepTypeEquals<boolean>( true, false ); // true
deepTypeEquals<boolean>( true, true ); // true
deepTypeEquals<boolean>( true, "true" ); //false

deepTypeEquals<string[]>([ "test string" ], [ "input" ]); // true
deepTypeEquals<string[]>([ "test string" ], "input" ); // false
```

### Union Types

```txs
 type TestUnion = string | number;
 const testCase = union<TestUnion>( "test string", 123 );
 deepTypeEquals<TestUnion>( testCase, "string to test" ) // true;
 deepTypeEquals<TestUnion>( testCase, true ) // false;
```

```txs
 type TestUnion = string | number;
 const testCase = union<TestUnion>( "test string", 123 );
 const isEqual = deepTypeEquals<TestUnion[]>([ testCase ], [ "string to test" ]) // true;
 const isEqual = deepTypeEquals<TestUnion[]>([ testCase ], "string to test" ) // false;
```
