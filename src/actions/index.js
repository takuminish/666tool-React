export const INPUT_VALUE='INPUT_VALUE';

export function inputValue(input) {
    return {
        type: INPUT_VALUE,
        input: input
    }
}

export const SET_VALUE='SET_VALUE';

export function setValue(input) {
    console.log(input);
    return {
        type: SET_VALUE,
        input: input
    }
}
