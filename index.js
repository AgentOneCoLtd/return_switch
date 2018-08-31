"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReturnSwitchIndex;
(function (ReturnSwitchIndex) {
    ReturnSwitchIndex[ReturnSwitchIndex["RIGHT"] = 0] = "RIGHT";
    ReturnSwitchIndex[ReturnSwitchIndex["VALUE"] = 1] = "VALUE";
})(ReturnSwitchIndex = exports.ReturnSwitchIndex || (exports.ReturnSwitchIndex = {}));
exports.returnSwitch = (left) => (rsCaseList) => {
    const predicate = (rsCase) => rsCase[ReturnSwitchIndex.RIGHT] === true || left === rsCase[ReturnSwitchIndex.RIGHT];
    const rsCase = rsCaseList.find(predicate);
    if (rsCase === undefined) {
        throw new Error('NO_MATCH: no case is matched');
    }
    return rsCase[ReturnSwitchIndex.VALUE];
};
