const initialState = {
    input: ""
}

const setValue = (prevState = initialState, action) => {
    switch(action.type) {
        case 'SET_VALUE_POSITIVE':
            return {
                akumaNumberResult: action.akumaNumberResult,
                resultTexts: action.resultTexts,
                input: action.input
            }
        case 'SET_VALUE_NEGATIVE':
            return {
                akumaNumberFrequency: action.akumaNumberFrequency,
                input: action.input
            }
        default:
            return prevState;
    }
}

export default setValue;