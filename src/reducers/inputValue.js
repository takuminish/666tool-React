const initialState = {
    input: ""
}

const inputValue = (prevState = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'INPUT_VALUE':
            return {input: action.input}
        default:
            return prevState;
    }
}

export default inputValue;