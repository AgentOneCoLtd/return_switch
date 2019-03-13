export var ReturnSwitchIndex;
(function (ReturnSwitchIndex) {
    ReturnSwitchIndex[ReturnSwitchIndex["RIGHT"] = 0] = "RIGHT";
    ReturnSwitchIndex[ReturnSwitchIndex["VALUE"] = 1] = "VALUE";
})(ReturnSwitchIndex || (ReturnSwitchIndex = {}));
/**
 * compare `left` and `right` then return `value` if `right` === true or `left` === `right`
 * @param  left anything to compare with `right`
 * @return      return `value` if `right` === true or `left` === `right`
 */
// tslint:disable-next-line no-any
export const returnSwitch = (left) => (rsCaseList) => {
    const predicate = (rsCase) => rsCase[ReturnSwitchIndex.RIGHT] === true || left === rsCase[ReturnSwitchIndex.RIGHT];
    const rsCase = rsCaseList.find(predicate);
    if (rsCase === undefined) {
        throw new Error('NO_MATCH: no case is matched');
    }
    return rsCase[ReturnSwitchIndex.VALUE];
};
//# sourceMappingURL=index.js.map