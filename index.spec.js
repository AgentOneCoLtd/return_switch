"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
it('should return case where left === right', () => {
    const foo = index_1.returnSwitch('foo')([['foo', 'foo'], [true, 'bar']]);
    expect(foo).toBe('foo');
});
it('should return case where left === true', () => {
    const bar = index_1.returnSwitch('bar')([['foo', 'foo'], [true, 'bar']]);
    expect(bar).toBe('bar');
});
it('should throw error if no match', () => {
    const getBar = () => index_1.returnSwitch('bar')([['foo', 'foo']]);
    expect(getBar).toThrowError();
});
