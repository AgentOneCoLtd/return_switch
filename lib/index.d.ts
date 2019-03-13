export declare enum ReturnSwitchIndex {
    RIGHT = 0,
    VALUE = 1
}
export interface IReturnSwitchCase<T> {
    [ReturnSwitchIndex.RIGHT]: any;
    [ReturnSwitchIndex.VALUE]: T;
}
/**
 * compare `left` and `right` then return `value` if `right` === true or `left` === `right`
 * @param  left anything to compare with `right`
 * @return      return `value` if `right` === true or `left` === `right`
 */
export declare const returnSwitch: <T>(left: any) => (rsCaseList: IReturnSwitchCase<T>[]) => T;
//# sourceMappingURL=index.d.ts.map