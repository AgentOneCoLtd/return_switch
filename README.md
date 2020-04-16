# Return Switch
![Node.js CI](https://github.com/AgentOneCoLtd/return_switch/workflows/Node.js%20CI/badge.svg)

Control Statement that can return result is cool. It can reduce ugly code. Some other libs have done this but they are too complicated for our need.

## Support

at least ES2015

## Install

```bash
yarn add @ag1/return_switch
```

## Usage

```ts
import { returnSwitch } from '@ag1/return_switch';
```

```ts
const foo = returnSwitch<string>('foo')([
    ['foo', 'foo'], // matched
    [true, 'bar'],
]);

console.log(foo); // foo
```

```ts
const bar = returnSwitch<string>('bar')([
    ['foo', 'foo'],
    [true, 'bar'], // default
]);

console.log(bar); // bar
```

```ts
const lorem = returnSwitch<string>('lorem')([
    ['foo', 'foo'],
    ['bar', 'bar'],
]); // NO_MATCH, throw error
```

## Test

```bash
yarn test
```
