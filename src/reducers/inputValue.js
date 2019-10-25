import { arrowFunctionExpression } from "@babel/types";

const initialState = {
    input: "hoge"
}

const inputValue = (prevState = initialState, action) => {
    switch(action.type) {
        case 'INPUT_VALUE':
            return {input: action.input}
        default:
            return prevState;
    }
}

export default inputValue;