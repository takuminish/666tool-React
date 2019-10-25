import {combineReducers} from 'redux'
import setValue from './setValue'
import inputValue from './inputValue'

const reducer = combineReducers({
    setValue,
    inputValue
});

export default reducer;