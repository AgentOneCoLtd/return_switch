export enum ReturnSwitchIndex {
    RIGHT,
    VALUE,
}

export interface IReturnSwitchCase<T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [ReturnSwitchIndex.RIGHT]: any;
    [ReturnSwitchIndex.VALUE]: T;
}

/**
 * compare `left` and `right` then return `value` if `right` === true or `left` === `right`
 * @param  left anything to compare with `right`
 * @return      return `value` if `right` === true or `left` === `right`
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function returnSwitch<T>(left: any) {
    return (rsCaseList: IReturnSwitchCase<T>[]): T => {
        const predicate = (rsCase: IReturnSwitchCase<T>): boolean =>
            rsCase[ReturnSwitchIndex.RIGHT] === true || left === rsCase[ReturnSwitchIndex.RIGHT];

        const rsCase = rsCaseList.find(predicate);

        if (rsCase === undefined) {
            throw new Error('NO_MATCH: no case is matched');
        }

        return rsCase[ReturnSwitchIndex.VALUE];
    };
}
