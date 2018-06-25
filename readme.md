# Return Switch

Control Statement that can return result is cool. It can reduce ugly code. Some other libs have done this but they are too complicated for our need.

## usage

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

## test

```bash
yarn test
```

## todo
1. perf test
