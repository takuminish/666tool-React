import {akumaNumberDecision, akumanumberFrequency} from '../logics/akuma'

export const SET_VALUE_POSITIVE='SET_VALUE_POSITIVE';
export const SET_VALUE_NEGATIVE='SET_VALUE_NEGATIVE';

export function setValue(input) {
    let resultTexts = [];
    if (input >= 0) {
        let akumaNumberResult = akumaNumberDecision(parseInt(input), resultTexts);
        return {
            type: SET_VALUE_POSITIVE,
            akumaNumberResult: akumaNumberResult,
            resultTexts: resultTexts,
            input: input
        }
    
    } else {
        let akumaNumberFrequency = akumanumberFrequency(Math.abs(input), [{akumaNumberCount: 0, akumaNumberTripleCount: 0, otherCount: 0, dx: 0}]);
        return {
            type: SET_VALUE_NEGATIVE,
            akumaNumberFrequency: akumaNumberFrequency,
            input: input
        }
    }

}
