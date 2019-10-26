const initialState = {
    input: ""
}

const setValue = (prevState = initialState, action) => {
    switch(action.type) {
        case 'SET_VALUE':
            return {
                akumaNumberResult: action.akumaNumberResult,
                resultTexts: action.resultTexts,
                input: action.input
            }
        default:
            return prevState;
    }
}

export default setValue;