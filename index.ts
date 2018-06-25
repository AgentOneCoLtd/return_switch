export enum ReturnSwitchIndex {
    RIGHT,
    VALUE,
}

export interface IReturnSwitchCase<T> {
    [ReturnSwitchIndex.RIGHT]: any;
    [ReturnSwitchIndex.VALUE]: T;
}

export const returnSwitch = <T>(left: any) => (rsCaseList: IReturnSwitchCase<T>[]): T => {
    const predicate = (rsCase: IReturnSwitchCase<T>) =>
        rsCase[ReturnSwitchIndex.RIGHT] === true
        || left === rsCase[ReturnSwitchIndex.RIGHT];

    const rsCase = rsCaseList.find(predicate);

    if (rsCase === undefined) {
        throw new Error('NO_MATCH: no case is matched');
    }

    return rsCase[ReturnSwitchIndex.VALUE];
};
