import {akumaNumberDecision, akumanumberFrequency} from '../logics/akuma'

export const SET_VALUE='SET_VALUE';

export function setValue(input) {
    let resultTexts = [];
    let akumaNumberResult = akumaNumberDecision(parseInt(input), resultTexts);
    akumanumberFrequency(10000, [{akumaNumberCount: 0, akumaNumberTripleCount: 0, dx: 0}])
    return {
        type: SET_VALUE,
        akumaNumberResult: akumaNumberResult,
        resultTexts: resultTexts,
        input: input
    }
}
