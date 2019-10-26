import {akumaNumberDecision} from '../logics/akuma'

export const INPUT_VALUE='INPUT_VALUE';

export function inputValue(input) {
    return {
        type: INPUT_VALUE,
        input: input
    }
}

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
