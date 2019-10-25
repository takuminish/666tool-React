import React from 'react'
import {connect} from 'react-redux'
import App from '../components/App'
import * as Actions from '../actions'
import {bindActionCreators} from 'redux'

function mapStateToProps(state) {
    return {
        input: state.inputValue.input,
        inputResult: state.setValue.inputResult
    };
}

function mapDispatchToProps(dispatch) {
    return (bindActionCreators(Actions, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(App);