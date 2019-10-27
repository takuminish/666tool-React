import {connect} from 'react-redux'
import App from '../components/App'
import * as Actions from '../actions'
import {bindActionCreators} from 'redux'

function mapStateToProps(state) {
    return {
        inputResult: state.setValue.input,
        resultTexts: state.setValue.resultTexts,
        akumaNumberResult: state.setValue.akumaNumberResult
    };
}

function mapDispatchToProps(dispatch) {
    return (bindActionCreators(Actions, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(App);