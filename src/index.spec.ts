import { returnSwitch } from './index';

it('should return case where left === right', () => {
    const foo = returnSwitch<string>('foo')([['foo', 'foo'], [true, 'bar']]);

    expect(foo).toBe('foo');
});

it('should return case where left === true', () => {
    const bar = returnSwitch<string>('bar')([['foo', 'foo'], [true, 'bar']]);

    expect(bar).toBe('bar');
});

it('should throw error if no match', () => {
    const getBar = (): string => returnSwitch<string>('bar')([['foo', 'foo']]);

    expect(getBar).toThrowError();
});
