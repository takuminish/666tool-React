import React from 'react'
import {connect} from 'react-redux'
import App from '../components/App'
import inputValue from '../actions/inputValue'
function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        handleClick(input) {
            dispatch(inputValue(input));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);