import {akumaNumberDecision} from '../logics/akuma'

export const SET_VALUE='SET_VALUE';

export function setValue(input) {
    let resultTexts = [];
    let akumaNumberResult = akumaNumberDecision(parseInt(input), resultTexts);
    return {
        type: SET_VALUE,
        akumaNumberResult: akumaNumberResult,
        resultTexts: resultTexts,
        input: input
    }
}
