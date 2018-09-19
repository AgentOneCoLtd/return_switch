export declare enum ReturnSwitchIndex {
    RIGHT = 0,
    VALUE = 1
}
export interface IReturnSwitchCase<T> {
    [ReturnSwitchIndex.RIGHT]: any;
    [ReturnSwitchIndex.VALUE]: T;
}
export declare const returnSwitch: <T>(left: any) => (rsCaseList: IReturnSwitchCase<T>[]) => T;
