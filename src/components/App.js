import React from 'react'
import AkumaForm from './AkumaForm'
import AkumaResult from './AkumaResult'

class App extends React.Component {
    render() {
        return (
            <div>        
                <AkumaForm handleClick={this.props.setValue} handleChange={this.props.inputValue} input={this.props.input}/>
                <AkumaResult inputResult={this.props.inputResult} akumaNumberResult={this.props.akumaNumberResult} resultTexts={this.props.resultTexts}/>
            </div>
        );
    }

}

export default App;