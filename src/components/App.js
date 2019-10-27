import React from 'react'
import AkumaForm from './AkumaForm'
import AkumaResult from './AkumaResult'
import AKumaComponent from './styledcomponents/AkumaComponent'

class App extends React.Component {
    render() {
        return (
            <AKumaComponent>        
                <AkumaForm handleClick={this.props.setValue} handleChange={this.props.inputValue} input={this.props.input}/>
                <AkumaResult inputResult={this.props.inputResult} akumaNumberResult={this.props.akumaNumberResult} resultTexts={this.props.resultTexts}/>
            </AKumaComponent>
        );
    }

}

export default App;