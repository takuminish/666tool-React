const initialState = {
    input: ""
}

const setValue = (prevState = initialState, action) => {
    switch(action.type) {
        case 'SET_VALUE':
            return {inputResult: action.input}
        default:
            return prevState;
    }
}

export default setValue;