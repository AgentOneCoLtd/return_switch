export enum ReturnSwitchIndex {
    RIGHT,
    VALUE,
}

export interface IReturnSwitchCase<T> {
    // tslint:disable-next-line no-any
    [ReturnSwitchIndex.RIGHT]: any;
    [ReturnSwitchIndex.VALUE]: T;
}

/**
 * compare `left` and `right` then return `value` if `right` === true or `left` === `right`
 * @param  left anything to compare with `right`
 * @return      return `value` if `right` === true or `left` === `right`
 */
// tslint:disable-next-line no-any
export const returnSwitch = <T>(left: any) => (rsCaseList: IReturnSwitchCase<T>[]): T => {
    const predicate = (rsCase: IReturnSwitchCase<T>) =>
        rsCase[ReturnSwitchIndex.RIGHT] === true || left === rsCase[ReturnSwitchIndex.RIGHT];

    const rsCase = rsCaseList.find(predicate);

    if (rsCase === undefined) {
        throw new Error('NO_MATCH: no case is matched');
    }

    return rsCase[ReturnSwitchIndex.VALUE];
};
